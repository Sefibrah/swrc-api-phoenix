"use strict";
const { getDays } = require("../../../shared/functions/get-days");
const fs = require("fs");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getLatestPriceColumn,
} = require("../../../shared/functions/get-latest-price-column");
const utils = require("@strapi/utils");
const {
  getRandomString,
} = require("../../../shared/functions/get-random-string");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

/**
 * consumer service
 */

module.exports = ({ strapi }) => ({
  createReservationFromCar: async (
    id,
    startDateTime,
    endDateTime,
    user,
    startLocation,
    endLocation,
    rentalExtras,
    flightNumber,
    userGroup
  ) => {
    const carGroupFromDb = await strapi
      .query("api::car-group.car-group")
      .findOne({
        where: {
          userGroup,
          cars: { id },
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

    // procedure: figure out if the car is available

    const isAvailable = await strapi
      .service("api::car.car")
      .isAvailable(id, startDateTime, endDateTime, userGroup);

    if (isAvailable.message != "CAR_IS_AVAILABLE") {
      throw new NotFoundError("CAR_IS_NOT_AVAILABLE");
    }

    // feat: will be used for price calculations for the reservation

    const carReservation = await prepareAndCreateReservationRequestFromConsumer(
      strapi,
      id,
      carGroupFromDb.id,
      carGroupFromDb.prices,
      startDateTime,
      endDateTime,
      startLocation,
      endLocation,
      flightNumber,
      rentalExtras,
      user,
      userGroup
    );

    return carReservation;
  },
  createReservationFromGroupedCar: async (
    id,
    startDateTime,
    endDateTime,
    user,
    startLocation,
    endLocation,
    rentalExtras,
    flightNumber,
    userGroup
  ) => {
    const carGroupFromDb = await strapi
      .query("api::car-group.car-group")
      .findOne({
        where: {
          userGroup,
          id,
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
        .isAvailable(car.id, startDateTime, endDateTime, userGroup);
      if (isAvailable.message == "CAR_IS_AVAILABLE") {
        carFromDbId = car.id;
        break;
      }
    }

    if (carFromDbId == null) {
      throw new NotFoundError("CAR_IS_NOT_AVAILABLE");
    }

    // feat: will be used for price calculations for the reservation

    const carReservation = await prepareAndCreateReservationRequestFromConsumer(
      strapi,
      carFromDbId,
      id,
      carGroupFromDb.prices,
      startDateTime,
      endDateTime,
      startLocation,
      endLocation,
      flightNumber,
      rentalExtras,
      user,
      userGroup
    );

    return carReservation;
  },
  getCarReservationById: async (ctx, next) => {},
  getCarGroupedReservationById: async (id, userGroup) => {},
  getCarReservationByCode: async (code, userGroup) => {
    const {
      id,
      carGroup,
      car,
      rentalAgreementDetail,
      agreementDetail,
      rentalExtras,
      transaction,
      flightNumber,
      status,
    } = await getReservationByCode(code, userGroup);

    const response = {
      code,
      id,
      flightNumber,
      status,
      rentalAgreementDetail,
      agreementDetail,
      rentalExtras: rentalExtras.map((rE) => ({
        id: rE.extra.id,
        quantity: rE.quantity,
      })),
      car: {
        id: car.id,
        // fixme: this is shit code! fix the substring
        name: `${carGroup.name} (${car.registrationPlate.substring(
          car.registrationPlate.length - 3,
          car.registrationPlate.length
        )})`,
        thumbnail: carGroup.thumbnail.url,
        seats: car.seats,
        doors: car.doors,
        carType: car.carType,
        fuelType: car.fuelType,
        transmissionType: car.transmissionType,
        // largeBags: carReservation.car.largeBags,
        // smallBags: carReservation.car.smallBags,
      },
      transaction,
    };
    return response;
  },
  getCarGroupedReservationByCode: async (code, userGroup) => {
    const {
      id,
      carGroup,
      car,
      rentalAgreementDetail,
      agreementDetail,
      rentalExtras,
      transaction,
      flightNumber,
      status,
    } = await getReservationByCode(code, userGroup);

    const response = {
      id,
      code,
      flightNumber,
      status,
      rentalAgreementDetail,
      agreementDetail,
      rentalExtras: rentalExtras.map((rE) => ({
        id: rE.extra.id,
        quantity: rE.quantity,
      })),
      car: {
        id: carGroup.id,
        name: carGroup.name,
        thumbnail: carGroup.thumbnail.url,
        seats: car.seats,
        doors: car.doors,
        carType: car.carType,
        fuelType: car.fuelType,
        transmissionType: car.transmissionType,
        // largeBags: car.largeBags,
        // smallBags: car.smallBags,
      },
      transaction,
    };
    return response;
  },
  getCarOffers: async (startDatetime, endDatetime, carType, userGroup) => {
    const days = getDays(startDatetime, endDatetime);

    let carFilter = {
      userGroup,
    };
    if (carType != null && carType != "") {
      carFilter = {
        ...carFilter,
        isAvailable: { $eq: true },
        carType: {
          $eq: carType || null,
        },
      };
    }

    let cars = await strapi.db.query("api::car.car").findMany({
      select: [
        "id",
        "make",
        "model",
        "transmissionType",
        "fuelType",
        "carType",
        "doors",
        "seats",
        "isAvailable",
        "registrationPlate",
      ],
      where: carFilter,
    });

    const uniqueBusyCarIds = await getUniqueBusyCarIds(
      strapi,
      startDatetime,
      endDatetime
    );
    // filter out vehicles that aren't busy!
    cars = [
      ...cars.filter(
        (car) =>
          !uniqueBusyCarIds.includes(car.id) &&
          car.isAvailable &&
          // fixme: ovo je takav hardcode fix znaci nije normalno
          car.registrationPlate != "POMOCNOVOZILO"
      ),
    ];
    const carGroupsMemo = [];
    const response = [];
    // calculate the vehicle prices!!
    for (let i = 0; i < cars.length; i++) {
      let car = cars[i];
      let carGroup = carGroupsMemo.find(
        (carGroup) =>
          carGroup?.cars?.findIndex(
            (carFromCarGroup) => carFromCarGroup?.id == car?.id
          ) > -1
      );
      if (!carGroup) {
        carGroup = await strapi.db.query("api::car-group.car-group").findOne({
          select: ["id", "name"],
          populate: {
            prices: {
              select: ["minDays", "amount"],
            },
            thumbnail: {
              select: ["url"],
            },
          },
          where: { userGroup, cars: { id: { $eq: car.id } } },
        });
      }
      let price = 0;
      let discount = 0;

      if (carGroup) {
        carGroupsMemo.push(carGroup);
        price = getLatestPriceColumn(carGroup, days);
        const { fixedDiscount } = await calculateDiscountForCar(
          strapi,
          carGroup.id,
          startDatetime,
          endDatetime,
          userGroup
        );
        discount = fixedDiscount;
      }
      const carResponse = {
        doors: car.doors,
        fuelType: car.fuelType,
        id: car.id,
        seats: car.seats,
        carType: car.carType,
        transmissionType: car.transmissionType,
        thumbnail: carGroup?.thumbnail?.url,
        // fixme: this is shit code! fix the substring
        name: `${car.make} ${car.model} (${car.registrationPlate.substring(
          car.registrationPlate.length - 3,
          car.registrationPlate.length
        )})`,
        priceNoDiscount: price,
        price: price - discount,
        discount,
      };
      response.push(carResponse);
    }
    return response;
  },
  getCarGroupedOffers: async (
    startDatetime,
    endDatetime,
    carType,
    userGroup
  ) => {
    const days = getDays(startDatetime, endDatetime);

    let carFilter = {
      userGroup,
    };
    if (carType != null && carType != "") {
      carFilter = {
        ...carFilter,
        cars: {
          isAvailable: { $eq: true },
          carType: {
            $eq: carType || null,
          },
        },
      };
    }

    const carGroups = await strapi.db
      .query("api::car-group.car-group")
      .findMany({
        select: ["id", "name"],
        populate: {
          prices: {
            select: ["minDays", "amount"],
          },
          cars: {
            select: [
              "id",
              "transmissionType",
              "fuelType",
              "carType",
              "doors",
              "seats",
              "isAvailable",
              "registrationPlate",
            ],
          },
          thumbnail: {
            select: ["url"],
          },
        },
        where: carFilter,
      });

    const uniqueBusyCarIds = await getUniqueBusyCarIds(
      strapi,
      startDatetime,
      endDatetime
    );
    // filter out vehicles that are busy!
    carGroups.forEach((carGroup) => {
      carGroup.cars = carGroup.cars.filter(
        (car) =>
          !uniqueBusyCarIds.includes(car.id) &&
          car.isAvailable &&
          // fixme: ovo je takav hardcode fix znaci nije normalno
          car.registrationPlate != "POMOCNOVOZILO"
      );
    });
    let availableCarGroups = carGroups.filter(
      (carGroup) => carGroup.cars.length > 0
    );
    // calculate the vehicle prices!!
    availableCarGroups = availableCarGroups.map((carGroup) => {
      const price = getLatestPriceColumn(carGroup, days);
      // we don't need to show the client the entire price column
      return {
        ...carGroup,
        price,
        // we don't need to show it if the cars related to the car group are available...
        cars: carGroup.cars.map(({ isAvailable, ...car }) => car),
      };
    });
    // fixme: kad se dodaju popusti, onda ovdje moraju da se reflect na neki nacin
    // ...
    // only return each group's first car child!
    const response = [];
    for (let i = 0; i < availableCarGroups.length; i++) {
      const carGroup = availableCarGroups[i];
      const { fixedDiscount } = await calculateDiscountForCar(
        strapi,
        carGroup.id,
        startDatetime,
        endDatetime,
        userGroup
      );
      const discount = fixedDiscount;
      const carFromGroup = carGroup.cars[0];
      const carGroupResponse = {
        doors: carFromGroup.doors,
        fuelType: carFromGroup.fuelType,
        carType: carFromGroup.carType,
        seats: carFromGroup.seats,
        transmissionType: carFromGroup.transmissionType,
        thumbnail: carGroup?.thumbnail?.url,
        name: carGroup.name,
        priceNoDiscount: carGroup.price,
        id: carGroup.id,
        price: carGroup.price - discount,
        // add discount if it's during winter
        discount,
      };
      response.push(carGroupResponse);
    }
    return response;
  },
  getCarOffer: async (id, startDatetime, endDatetime, userGroup) => {
    const days = getDays(startDatetime, endDatetime);

    const carFilter = {
      userGroup,
      id,
    };

    const car = await strapi.db.query("api::car.car").findOne({
      select: [
        "id",
        "make",
        "model",
        "transmissionType",
        "fuelType",
        "carType",
        "doors",
        "seats",
        "isAvailable",
        "registrationPlate",
      ],
      where: carFilter,
    });
    const uniqueBusyCarIds = await getUniqueBusyCarIds(
      strapi,
      startDatetime,
      endDatetime
    );
    if (
      uniqueBusyCarIds.includes(car.id) ||
      !car.isAvailable ||
      // fixme: ovo je takav hardcode fix znaci nije normalno
      car.registrationPlate == "POMOCNOVOZILO"
    ) {
      return new NotFoundError("OFFER_NOT_FOUND");
    }
    // calculate the vehicle prices!!
    const carGroup = await strapi.db.query("api::car-group.car-group").findOne({
      select: ["id", "name"],
      populate: {
        prices: {
          select: ["minDays", "amount"],
        },
        thumbnail: {
          select: ["url"],
        },
      },
      where: { userGroup, cars: { id: car.id } },
    });
    let price = 0;
    let discount = 0;
    if (carGroup != null) {
      price = getLatestPriceColumn(carGroup, days);
      const { fixedDiscount } = await calculateDiscountForCar(
        strapi,
        carGroup.id,
        startDatetime,
        endDatetime,
        userGroup
      );
      discount = fixedDiscount;
    }
    const carResponse = {
      doors: car.doors,
      fuelType: car.fuelType,
      id: car.id,
      seats: car.seats,
      transmissionType: car.transmissionType,
      carType: car.carType,
      thumbnail: carGroup?.thumbnail?.url,
      // fixme: this is shit code! fix the substring
      name: `${car.make} ${car.model} (${car.registrationPlate.substring(
        car.registrationPlate.length - 3,
        car.registrationPlate.length
      )})`,
      priceNoDiscount: price,
      price: price - discount,
      discount,
    };
    return carResponse;
  },
  getCarGroupedOffer: async (id, startDatetime, endDatetime, userGroup) => {
    const days = getDays(startDatetime, endDatetime);

    let carFilter = {
      userGroup,
      id,
    };

    const carGroup = await strapi.db.query("api::car-group.car-group").findOne({
      select: ["id", "name"],
      populate: {
        prices: {
          select: ["minDays", "amount"],
        },
        cars: {
          select: [
            "id",
            "transmissionType",
            "fuelType",
            "carType",
            "doors",
            "seats",
            "isAvailable",
            "registrationPlate",
          ],
        },
        thumbnail: {
          select: ["url"],
        },
      },
      where: carFilter,
    });
    const uniqueBusyCarIds = await getUniqueBusyCarIds(
      strapi,
      startDatetime,
      endDatetime
    );

    // filter out vehicles that are busy!
    carGroup.cars = [
      ...carGroup.cars.filter(
        (car) =>
          !uniqueBusyCarIds.includes(car.id) &&
          car.isAvailable &&
          // fixme: ovo je takav bolestan i bezobrazan hardcode znaci nije normalno...
          car.registrationPlate != "POMOCNOVOZILO"
      ),
    ];
    if (carGroup.cars?.length == 0) {
      return new NotFoundError("OFFER_NOT_FOUND");
    }
    // calculate the vehicle prices!!
    let price = getLatestPriceColumn(carGroup, days);
    // we don't need to show the client the entire price column
    const { fixedDiscount } = await calculateDiscountForCar(
      strapi,
      carGroup.id,
      startDatetime,
      endDatetime,
      userGroup
    );
    const discount = fixedDiscount;

    const carFromGroup = carGroup.cars[0];
    const carGroupResponse = {
      doors: carFromGroup.doors,
      fuelType: carFromGroup.fuelType,
      seats: carFromGroup.seats,
      transmissionType: carFromGroup.transmissionType,
      carType: carFromGroup.carType,
      thumbnail: carGroup?.thumbnail?.url,
      name: carGroup.name,
      priceNoDiscount: price,
      id: carGroup.id,
      price: price - discount,
      discount,
    };
    return carGroupResponse;
  },
});

async function getUniqueBusyCarIds(strapi, startDatetime, endDatetime) {
  const epicEventQuery = {
    $or: [
      {
        $and: [
          {
            agreementDetail: {
              startDatetime: {
                $gte: startDatetime,
                $lte: endDatetime,
              },
              endDatetime: {
                $gte: endDatetime,
              },
            },
          },
        ],
      },
      {
        $and: [
          {
            agreementDetail: {
              endDatetime: {
                $gte: startDatetime,
                $lte: endDatetime,
              },
              startDatetime: {
                $lte: endDatetime,
              },
            },
          },
        ],
      },
      {
        $and: [
          {
            agreementDetail: {
              startDatetime: {
                $lte: startDatetime,
                $lte: endDatetime,
              },
              endDatetime: {
                $gte: endDatetime,
                $gte: startDatetime,
              },
            },
          },
        ],
      },
    ],
  };
  const carContracts = await strapi.db
    .query("api::car-contract.car-contract")
    .findMany({
      select: ["id"],
      populate: {
        car: {
          select: ["id"],
        },
        agreementDetail: {
          select: ["startDatetime", "endDatetime"],
        },
      },
      where: epicEventQuery,
    });
  const carReservations = await strapi.db
    .query("api::car-reservation.car-reservation")
    .findMany({
      select: ["id"],
      populate: {
        car: {
          select: ["id"],
        },
        agreementDetail: {
          select: ["startDatetime", "endDatetime"],
        },
      },
      where: epicEventQuery,
    });
  const carMaintenances = await strapi.db
    .query("api::car-maintenance.car-maintenance")
    .findMany({
      select: ["id"],
      populate: {
        car: {
          select: ["id"],
        },
        agreementDetail: {
          select: ["startDatetime", "endDatetime"],
        },
      },
      where: epicEventQuery,
    });
  const busyCarIds = [...carContracts, ...carReservations, ...carMaintenances]
    .map((event) => event?.car?.id)
    .filter((id) => id != null);
  return [...new Set(busyCarIds)];
}

async function calculateDiscountForCar(
  strapi,
  carGroupId,
  startDatetime,
  endDatetime,
  userGroup
) {
  const recurringDiscount = await strapi
    .service("api::recurring-discount.recurring-discount")
    .doesCarGroupHaveDiscountInGivenPeriod(
      carGroupId,
      startDatetime,
      endDatetime,
      userGroup
    );
  const temporaryDiscount = await strapi
    .service("api::temporary-discount.temporary-discount")
    .doesCarGroupHaveDiscountInGivenPeriod(
      carGroupId,
      startDatetime,
      endDatetime,
      userGroup
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
  return { discount, fixedDiscount, discountType };
}

async function getReservationByCode(code, userGroup) {
  const carReservationFilter = {
    userGroup,
    code,
  };

  const carReservation = await strapi.db
    .query("api::car-reservation.car-reservation")
    .findOne({
      select: ["flightNumber", "code"],
      populate: {
        rentalAgreementDetail: {
          select: ["startLocation", "endLocation"],
          populate: {
            renter: {
              select: ["name"],
              populate: {
                contact: {
                  select: ["email", "telephonePrimary", "telephoneSecondary"],
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
          select: [
            "totalWithTax",
            "deposit",
            "extrasPrice",
            "pricePerDay",
            "extrasPrice",
            "totalPricePerDay",
            "discount",
            "discountType",
          ],
        },
        car: {
          select: [
            "id",
            "transmissionType",
            "registrationPlate",
            "fuelType",
            "carType",
            "doors",
            "seats",
          ],
        },
      },
      where: carReservationFilter,
    });

  const carGroupFilter = {
    userGroup,
    cars: {
      id: carReservation.car.id,
    },
  };

  const carGroup = await strapi.db.query("api::car-group.car-group").findOne({
    select: ["id", "name"],
    populate: {
      thumbnail: {
        select: ["url"],
      },
    },
    where: carGroupFilter,
  });

  const car = carReservation.car;
  const rentalAgreementDetail = carReservation.rentalAgreementDetail;
  const agreementDetail = carReservation.agreementDetail;
  const rentalExtras = carReservation.rentalExtras;
  const transaction = carReservation.transaction;
  const flightNumber = carReservation.flightNumber;
  const status = carReservation?.status;

  return {
    id: carReservation.id,
    carGroup,
    car,
    rentalAgreementDetail,
    agreementDetail,
    rentalExtras,
    transaction,
    flightNumber,
    status,
  };
}

async function prepareAndCreateReservationRequestFromConsumer(
  strapi,
  carId,
  carGroupId,
  prices,
  startDateTime,
  endDateTime,
  startLocation,
  endLocation,
  flightNumber,
  rentalExtras,
  user,
  userGroup
) {
  const days = getDays(startDateTime, endDateTime);

  // procedure: finding the latest price column for the reservation

  let latestPriceColumn = null;

  for (let i = prices.length - 1; i >= 0; i--) {
    const priceColumn = prices[i];
    if (days >= priceColumn.minDays) {
      latestPriceColumn = priceColumn;
      break;
    }
  }

  if (latestPriceColumn == null) {
    throw new NotFoundError("CAR_DOESNT_HAVE_PRICE_COLUMNS");
  }

  const pricePerDay = latestPriceColumn.amount;
  let totalWithTax = Math.ceil(pricePerDay * days);
  const deposit = 400; // fixme: hardcoded, most, if not all, companies don't want 400 as their deposit

  // procedure: calculating system discounts, for now, not implemented, so always zero
  // i think it's implemented now
  const { fixedDiscount, discountType, discount } =
    await calculateDiscountForCar(
      strapi,
      carGroupId,
      startDateTime,
      endDateTime,
      userGroup
    );

  totalWithTax -= fixedDiscount;

  // procedure: calculating the extras price for the reservation

  let extrasPrice = 0;

  if (rentalExtras != null && rentalExtras.length > 0) {
    for (let i = 0; i < rentalExtras.length; i++) {
      const rentalExtra = rentalExtras[i];

      const extraFromDb = await strapi.query("api::extra.extra").findOne({
        where: {
          userGroup,
          id: rentalExtra.id,
        },
        select: ["price"],
      });

      if (extraFromDb == null) {
        throw new NotFoundError("EXTRA_DOESNT_EXIST");
      }

      const isAvailable = await strapi
        .service("api::extra.extra")
        .isAvailable(
          rentalExtra.id,
          startDateTime,
          endDateTime,
          rentalExtra.quantity,
          userGroup
        );

      if (isAvailable?.message == "EXTRA_IS_AVAILABLE") {
        const extraPricePerDay = extraFromDb.price;
        extrasPrice += extraPricePerDay * days * rentalExtra.quantity;
      } else if (isAvailable?.error?.status == 404) {
        throw new NotFoundError(isAvailable?.error?.message);
      }
    }
  }

  totalWithTax += extrasPrice;
  const taxRate = 0.145299; // fixme: probably when going international this will need to be uplifted to the cloud
  const tax = totalWithTax * taxRate;
  const totalWithoutTax = totalWithTax - tax;

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
            userGroup,
          },
        }
      );

      rentalExtraIds.push(createdRentalExtra.id);
    }
  }

  // procedure: making the reservation + sending the email

  let carReservation = null;
  let recipient = "";
  if (user.jwt != null) {
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
    if (userFromDb != null) {
      carReservation = await submitReservationRequestToSystem(
        strapi,
        userFromDb.customer.individual.name,
        startDateTime,
        endDateTime,
        userFromDb.customer.id,
        startLocation,
        endLocation,
        rentalExtraIds,
        pricePerDay,
        totalWithTax,
        totalWithoutTax,
        tax,
        deposit,
        discount,
        discountType,
        extrasPrice,
        days,
        flightNumber,
        carId,
        userGroup
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
        { name, country: user.info.country, comment: null, isLocal: false }
      );

    carReservation = await submitReservationRequestToSystem(
      strapi,
      name,
      startDateTime,
      endDateTime,
      customer.id,
      startLocation,
      endLocation,
      rentalExtraIds,
      pricePerDay,
      totalWithTax,
      totalWithoutTax,
      tax,
      deposit,
      discount,
      discountType,
      extrasPrice,
      days,
      flightNumber,
      carId,
      userGroup
    );
  }

  await sendEmail(strapi, recipient, carReservation.code, userGroup);
  return carReservation;
}

async function submitReservationRequestToSystem(
  strapi,
  author,
  startDatetime,
  endDatetime,
  renter,
  startLocation,
  endLocation,
  rentalExtras,
  pricePerDay,
  totalWithTax,
  totalWithoutTax,
  tax,
  deposit,
  discount,
  discountType,
  extrasPrice,
  days,
  flightNumber,
  car,
  userGroup
) {
  const agreementDetail = await strapi.entityService.create(
    "api::agreement-detail.agreement-detail",
    {
      data: {
        comment: "web",
        author,
        startDatetime,
        endDatetime,
        userGroup,
      },
    }
  );
  const rentalAgreementDetail = await strapi.entityService.create(
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
  const transaction = await strapi.entityService.create(
    "api::transaction.transaction",
    {
      data: {
        totalWithTax,
        deposit,
        pricePerDay,
        totalPricePerDay: totalWithTax / days,
        days,
        discount,
        discountType,
        additionalCost: 0,
        tax,
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
        code: getRandomString(),
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

function formatString(template, data) {
  // Use a regular expression to match all occurrences of {key}
  const regex = /{(\w+)}/g;

  // Replace each matched placeholder with the corresponding value from the data object
  const formattedString = template.replace(regex, (match, key) => {
    return data[key] || match; // Use the value from data or keep the placeholder if not found
  });

  return formattedString;
}

async function sendEmail(strapi, recipient, code, userGroup) {
  let html = "";
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
      userGroup
    );
}
