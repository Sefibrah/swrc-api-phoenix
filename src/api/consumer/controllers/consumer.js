"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

/**
 * A set of functions called "actions" for `consumer`
 */

module.exports = {
  makeReservation: async (ctx, next) => {
    try {
      let subdomain = null;
      // makes sense only when i am doing it on localhost, for production this should never work
      // unless a hacker comes??
      if (ctx.req.headers.host.includes("localhost")) {
        subdomain = "seferware";
      } else {
        const host = ctx.req.headers.host;
        subdomain = host.split(".")[0];
      }
      const jwt =
        ctx.request.header?.authorization?.replace("Bearer ", "") || null;
      const carGroupId = ctx.request.body.carId;
      const startDatetime = ctx.request.body.startDatetime;
      const endDatetime = ctx.request.body.endDatetime;
      const startLocation = ctx.request.body.startLocation;
      const endLocation = ctx.request.body.endLocation;
      const flightNumber = ctx.request.body.flightNumber;
      const userInfo = ctx.request.body?.user;
      const rentalExtras = ctx.request.body.extras;
      const user = { info: userInfo, jwt };

      let carReservation = null;
      const comment = "";

      const loggedUserUserGroup = await strapi
        .query("plugin::multi-tenant.user-group")
        .findOne({
          where: {
            name: { $eq: subdomain },
          },
        });

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

      // procedure: finding an available car for the reservation
      let carFromDbId = null;

      for (let i = 0; i < carGroupFromDb.cars.length; i++) {
        const car = carGroupFromDb.cars[i];
        const isAvailable = await strapi
          .service("api::car.car")
          .isAvailable(car.id, startDatetime, endDatetime, subdomain);
        if (isAvailable.message == "CAR_IS_AVAILABLE") {
          carFromDbId = car.id;
          break;
        }
      }

      if (carFromDbId == null) {
        ctx.body = new NotFoundError("CAR_IS_NOT_AVAILABLE");
      }

      // feat: will be used for price calculations for the reservation

      const oneDayInMilliseconds = 86400000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const differenceInMilliseconds = Math.abs(
        new Date(endDatetime).getTime() -
          new Date(startDatetime).getTime()
      );
      let differenceInDays = Math.floor(
        differenceInMilliseconds / oneDayInMilliseconds
      );

      if (differenceInMilliseconds % oneDayInMilliseconds >= 43200000) {
        differenceInDays++;
      }

      const days = differenceInDays;

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
        ctx.body = new NotFoundError("CAR_DOESNT_HAVE_PRICE_COLUMNS");
      }

      let totalWithTax = latestPriceColumn.amount * days;
      const deposit = 400; // fixme: hardcoded, most, if not all, companies don't want 400 as their deposit

      // procedure: calculating system discounts, for now, not implemented, so always zero

      const discount = 0;

      // procedure: calculating the extras price for the reservation

      let extrasPrice = 0;

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

          if (extraFromDb == null) {
            ctx.body = new NotFoundError("EXTRA_DOESNT_EXIST");
          }

          const isAvailable = await strapi
            .service("api::extra.extra")
            .isAvailable(
              rentalExtra.id,
              startDatetime,
              endDatetime,
              rentalExtra.quantity,
              subdomain
            );

          if (isAvailable?.message == "EXTRA_IS_AVAILABLE") {
            const extraPricePerDay = extraFromDb.price;
            extrasPrice += extraPricePerDay * days * rentalExtra.quantity;
          } else if (isAvailable?.error?.status == 404) {
            ctx.body = new NotFoundError(isAvailable?.error?.message);
          }
        }
      }

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
                userGroup: loggedUserUserGroup.id
              },
            }
          );

          rentalExtraIds.push(createdRentalExtra.id);
        }
      }

      // procedure: making the reservation

      const userGroup = loggedUserUserGroup.id;
      if (user?.jwt != null) {
        const decoded = jwt_decode(user.jwt);
        const userId = decoded?.id;
        let userFromDb = await strapi
          .query("plugin::users-permissions.user")
          .findOne({
            where: { id: { $eq: userId } },
            populate: { customer: { populate: true } },
          });
        if (userFromDb != null && loggedUserUserGroup != null) {
          carReservation = await makeReservation(
            comment,
            userFromDb.customer.individual.name,
            startDatetime,
            endDatetime,
            userFromDb.customer.id,
            startLocation,
            endLocation,
            rentalExtraIds,
            totalWithTax,
            deposit,
            discount,
            extrasPrice,
            flightNumber,
            carFromDbId,
            userGroup
          );
        }
      } else {
        // fixme: idea: mozda je dobro da odradimo provjeru da li guest vec postoji?
        const name = user.info.title + " " + user.info.name;
        const contact = await strapi.entityService.create(
          "api::contact.contact",
          {
            data: {
              email: user.info.email,
              telephoneSecondary: user.info.telephone,
              userGroup,
            },
          }
        );
        const individual = await strapi.entityService.create(
          "api::individual.individual",
          {
            data: {
              contact: contact.id,
              // name,
              userGroup,
            },
          }
        );
        const customer = await strapi.entityService.create(
          "api::customer.customer",
          {
            data: {
              individual: individual.id,
              contact: contact.id,
              userGroup,
              name,
              type: "GUEST",
              isLocal: false,
            },
          }
        );
        const updatedIndividual = await strapi
          .query("api::individual.individual")
          .update({
            where: { id: individual.id },
            data: {
              customer: customer.id,
            },
          });
        const guest = await strapi.entityService.create("api::guest.guest", {
          data: {
            customer: customer.id,
            userGroup,
          },
        });
        carReservation = await makeReservation(
          comment,
          name,
          startDatetime,
          endDatetime,
          customer.id,
          startLocation,
          endLocation,
          rentalExtraIds,
          totalWithTax,
          deposit,
          discount,
          extrasPrice,
          flightNumber,
          carFromDbId,
          userGroup
        );
      }
      return carReservation;
    } catch (err) {
      ctx.body = err;
    }
  },
};

async function makeReservation(
  comment,
  author,
  startDatetime,
  endDatetime,
  renter,
  startLocation,
  endLocation,
  rentalExtras,
  totalWithTax,
  deposit,
  discount,
  extrasPrice,
  flightNumber,
  car,
  userGroup
) {
  let agreementDetail = await strapi.entityService.create(
    "api::agreement-detail.agreement-detail",
    {
      data: {
        comment,
        author,
        startDatetime,
        endDatetime,
        userGroup,
      },
    }
  );
  let rentalAgreementDetail = await strapi.entityService.create(
    "api::rental-agreement-detail.rental-agreement-detail",
    {
      data: {
        renter,
        startLocation,
        endLocation,
        userGroup,
      },
    }
  );
  let taxRate = 0.17; // probably when going international this will need to be uplifted to the cloud
  let tax = totalWithTax * taxRate;
  let totalWithoutTax = totalWithTax - tax;
  let transaction = await strapi.entityService.create(
    "api::transaction.transaction",
    {
      data: {
        totalWithTax,
        deposit,
        discount,
        discountType: "FIXED", // FIXED = 0, PER_DAY = 1, PERCENTAGE = 2, fixme: now it's hardcoded, before the packages update...
        additionalCost: 0,
        tax,
        paymentMethod: "CASH", // fixme: for now it's hardcoded, right?
        totalWithoutTax,
        extrasPrice,
        userGroup,
      },
    }
  );
  return await strapi.entityService.create(
    "api::car-reservation.car-reservation",
    {
      data: {
        flightNumber,
        car,
        rentalExtras,
        rentalAgreementDetail: rentalAgreementDetail.id,
        transaction: transaction.id,
        agreementDetail: agreementDetail.id,
        userGroup,
      },
    }
  );
}
