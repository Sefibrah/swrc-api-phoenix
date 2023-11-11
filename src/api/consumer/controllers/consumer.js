"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");
const {
  getRandomString,
} = require("../../../shared/functions/get-random-string");
const { getJwt } = require("../../../shared/functions/get-jwt");
const {
  getStartAndEndDateTimeFromPayload,
} = require("../../../shared/functions/get-start-and-end-date-time-from-payload");
const { getDays } = require("../../../shared/functions/get-days");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const fs = require("fs");
const util = require("util");
const {
  getLatestPriceColumn,
} = require("../../../shared/functions/get-latest-price-column");

/**
 * A set of functions called "actions" for `consumer`
 */

module.exports = {
  getReservationByCode: async (ctx, next) => {
    try {
      const code = ctx.request.params.code;
      const subdomain = getSubdomainFromRequest(ctx.request);

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let carReservation = await strapi
        .query("api::car-reservation.car-reservation")
        .findOne({
          where: { code: { $eq: code }, userGroup: loggedUserUserGroup.id },
          select: ["flightNumber", "code"],
          populate: {
            rentalAgreementDetail: {
              select: ["startLocation", "endLocation"],
              populate: {
                renter: {
                  select: ["name"],
                  populate: {
                    contact: {
                      select: [
                        "email",
                        "telephonePrimary",
                        "telephoneSecondary",
                      ],
                    },
                  },
                },
              },
            },
            rentalExtras: {
              select: ["quantity"],
              populate: {
                extra: {
                  select: ["id"],
                },
              },
            },
            agreementDetail: {
              select: ["startDatetime", "endDatetime"],
            },
            transaction: {
              select: ["totalWithTax", "deposit", "extrasPrice", "pricePerDay"],
            },
            car: {
              select: ["seats", "carType"],
              populate: {
                carGroup: {
                  select: ["name"],
                  populate: {
                    thumbnail: {
                      select: ["url"],
                    },
                  },
                },
              },
            },
          },
        });
      carReservation = {
        ...carReservation,
        rentalExtras: carReservation.rentalExtras.map((rE) => ({
          id: rE.extra.id,
          quantity: rE.quantity,
        })),
        car: {
          ...carReservation.car.carGroup,
          thumbnail: carReservation.car.carGroup.thumbnail.url,
          seats: carReservation.car.seats,
          carType: carReservation.car.carType,
          // largeBags: carReservation.car.largeBags,
          // smallBags: carReservation.car.smallBags,
        },
      };
      ctx.send(carReservation, 200);
    } catch (err) {
      ctx.send(err, 400);
    }
  },
  createReservation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const jwt = getJwt(ctx.request);
      const carGroupId = ctx.request.body.carId;
      const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
        ctx.request.body
      );
      const startLocation = ctx.request.body.startLocation;
      const endLocation = ctx.request.body.endLocation;
      const flightNumber = ctx.request.body.flightNumber;
      const userInfo = ctx.request.body.user;
      const rentalExtras = ctx.request.body.extras;
      const user = { info: userInfo, jwt };
      const code = getRandomString();
      let html = "";

      let carReservation = null;
      const comment = ctx.request.body?.comment;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const carGroupFromDb = await strapi
        .query("api::car-group.car-group")
        .findOne({
          where: {
            userGroup: loggedUserUserGroup.id,
            id: carGroupId,
          },
          select: ["id"],
          populate: {
            prices: {
              select: ["minDays", "amount"],
            },
            cars: {
              select: ["id"],
            },
          },
        });

      console.log(carGroupFromDb);

      // procedure: finding an available car for the reservation
      let carFromDbId = null;

      for (let i = 0; i < carGroupFromDb.cars.length; i++) {
        const car = carGroupFromDb.cars[i];
        const isAvailable = await strapi
          .service("api::car.car")
          .isAvailable(car.id, startDateTime, endDateTime, subdomain);
        console.log(car, isAvailable);
        if (isAvailable.message == "CAR_IS_AVAILABLE") {
          carFromDbId = car.id;
          break;
        }
      }

      console.log("carFromDbId", carFromDbId);

      if (carFromDbId == null) {
        ctx.send({ ...new NotFoundError("CAR_IS_NOT_AVAILABLE") }, 400);
        return ctx.body;
      }

      // feat: will be used for price calculations for the reservation

      const days = getDays(startDateTime, endDateTime);

      // procedure: finding the latest price column for the reservation

      let latestPriceColumn = null;

      for (let i = carGroupFromDb.prices.length - 1; i >= 0; i--) {
        const priceColumn = carGroupFromDb.prices[i];
        if (days >= priceColumn.minDays) {
          latestPriceColumn = priceColumn;
          break;
        }
      }

      if (latestPriceColumn == null) {
        ctx.send(
          { ...new NotFoundError("CAR_DOESNT_HAVE_PRICE_COLUMNS") },
          400
        );
        return ctx.body;
      }

      let totalWithTax = latestPriceColumn.amount * days;
      const deposit = 400; // fixme: hardcoded, most, if not all, companies don't want 400 as their deposit

      // procedure: calculating system discounts, for now, not implemented, so always zero

      const recurringDiscount = await strapi
        .service("api::recurring-discount.recurring-discount")
        .doesCarGroupHaveDiscountInGivenPeriod(
          carGroupId,
          startDateTime,
          endDateTime,
          subdomain
        );
      const temporaryDiscount = await strapi
        .service("api::temporary-discount.temporary-discount")
        .doesCarGroupHaveDiscountInGivenPeriod(
          carGroupId,
          startDateTime,
          endDateTime,
          subdomain
        );
      const discount =
        recurringDiscount.fixedDiscount > temporaryDiscount.fixedDiscount
          ? recurringDiscount.discount
          : temporaryDiscount.discount;
      const fixedDiscount =
        recurringDiscount.fixedDiscount > temporaryDiscount.fixedDiscount
          ? recurringDiscount.fixedDiscount
          : temporaryDiscount.fixedDiscount;
      const discountType =
        recurringDiscount.fixedDiscount > temporaryDiscount.fixedDiscount
          ? recurringDiscount.type
          : temporaryDiscount.type;

      totalWithTax -= fixedDiscount;

      // procedure: calculating the extras price for the reservation

      let extrasPrice = 0;

      console.log("rentalExtras", rentalExtras);

      if (rentalExtras != null && rentalExtras.length > 0) {
        for (let i = 0; i < rentalExtras.length; i++) {
          const rentalExtra = rentalExtras[i];

          const extraFromDb = await strapi.query("api::extra.extra").findOne({
            where: {
              userGroup: loggedUserUserGroup.id,
              id: rentalExtra.id,
            },
            select: ["price"],
          });

          console.log("extraFromDb", extraFromDb);

          if (extraFromDb == null) {
            ctx.send(new NotFoundError("EXTRA_DOESNT_EXIST"), 400);
            return;
          }

          const isAvailable = await strapi
            .service("api::extra.extra")
            .isAvailable(
              rentalExtra.id,
              startDateTime,
              endDateTime,
              rentalExtra.quantity,
              subdomain
            );

          console.log("isAvailable", isAvailable);

          if (isAvailable?.message == "EXTRA_IS_AVAILABLE") {
            const extraPricePerDay = extraFromDb.price;
            extrasPrice += extraPricePerDay * days * rentalExtra.quantity;

            console.log(
              `extrasPrice += ${extraPricePerDay} * ${days} * ${rentalExtra.quantity};`
            );
          } else if (isAvailable?.error?.status == 404) {
            ctx.send(new NotFoundError(isAvailable?.error?.message), 400);
          }
        }
      }

      console.log("extrasPrice", extrasPrice);

      totalWithTax += extrasPrice;

      // procedure: creating the rentalExtras IDs for the reservation

      let rentalExtraIds = [];

      if (rentalExtras != null && rentalExtras.length > 0) {
        for (let i = 0; i < rentalExtras.length; i++) {
          const rentalExtra = rentalExtras[i];

          const createdRentalExtra = await strapi.entityService.create(
            "api::rental-extra.rental-extra",
            {
              data: {
                quantity: rentalExtra.quantity,
                extra: rentalExtra.id,
                userGroup: loggedUserUserGroup.id,
              },
            }
          );

          rentalExtraIds.push(createdRentalExtra.id);
        }
      }

      // procedure: making the reservation

      const userGroup = loggedUserUserGroup.id;
      let recipient = "";
      if (user?.jwt != null) {
        const decoded = jwt_decode(user.jwt);
        const userId = decoded?.id;
        let userFromDb = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: { id: { $eq: userId } },
            populate: { customer: { populate: true } },
          });
        // fixme: ovo testirati
        recipient = userFromDb.email;
        if (userFromDb != null && loggedUserUserGroup != null) {
          carReservation = await strapi
            .service("api::consumer.consumer")
            .createFullReservationFromConsumer(
              comment,
              userFromDb.customer.individual.name,
              startDateTime,
              endDateTime,
              userFromDb.customer.id,
              startLocation,
              endLocation,
              rentalExtraIds,
              totalWithTax,
              deposit,
              discount,
              discountType,
              extrasPrice,
              flightNumber,
              carFromDbId,
              userGroup,
              code
            );
        }
      } else {
        // fixme: idea: mozda je dobro da odradimo provjeru da li guest vec postoji?
        const name = user.info.name;
        recipient = user.info.email;

        const customer = await strapi
          .service("api::customer.customer")
          .createIndividualGuestCustomer(
            userGroup,
            {
              email: user.info.email,
              telephonePrimary: user.info.telephone,
              telephoneSecondary: null,
              website: null,
            },
            { civilNumber: null, dateOfBirth: null, documents: null },
            { name, country: null, comment: null, isLocal: false }
          );

        carReservation = await strapi
          .service("api::consumer.consumer")
          .createFullReservationFromConsumer(
            comment,
            name,
            startDateTime,
            endDateTime,
            customer.id,
            startLocation,
            endLocation,
            rentalExtraIds,
            totalWithTax,
            deposit,
            discount,
            discountType,
            extrasPrice,
            flightNumber,
            carFromDbId,
            userGroup,
            code
          );
      }
      console.log("carReservation", carReservation);

      const rawHtml = fs.readFileSync(
        "src/shared/email/reservation-request-successful.html",
        "utf8"
      );
      html = formatString(rawHtml, {
        code,
        link: `https://gulftravelbosnia.com/booking-confirmation/${code}`,
      });

      console.log("html", html);

      // ovo prebaciti u web stranicu od gulftravelbosnia.com ... ovome nije mjesto ovdje ...
      await strapi
        .service("api::send-email.send-email")
        .sendEmail(
          recipient,
          html,
          "Your booking request has been received successfully!",
          subdomain
        );

      ctx.send(carReservation, 201);
    } catch (err) {
      ctx.send(err, 400);
    }
  },
};

function formatString(template, data) {
  // Use a regular expression to match all occurrences of {key}
  const regex = /{(\w+)}/g;

  // Replace each matched placeholder with the corresponding value from the data object
  const formattedString = template.replace(regex, (match, key) => {
    return data[key] || match; // Use the value from data or keep the placeholder if not found
  });

  return formattedString;
}
