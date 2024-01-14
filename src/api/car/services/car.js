"use strict";
const { getDays } = require("../../../shared/functions/get-days");

/**
 * car service.
 */

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const { createCoreService } = require("@strapi/strapi").factories;
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getLatestPriceColumn,
} = require("../../../shared/functions/get-latest-price-column");

module.exports = createCoreService("api::car.car", ({ strapi }) => ({
  relevantEventsList: async (carId, subdomain) => {
    const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);
    const $gte = new Date();
    $gte.setHours(0, 0, 0, 0);
    const $lte = new Date();
    $lte.setHours(23, 59, 59, 0);
    const epicEventQuery = {
      userGroup: loggedUserUserGroup.id,
      car: {
        id: { $eq: carId },
      },
      $or: [
        {
          $and: [
            {
              agreementDetail: {
                startDatetime: {
                  $gte,
                  $lte,
                },
                endDatetime: {
                  $gte,
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
                  $gte,
                  $lte,
                },
                startDatetime: {
                  $lte,
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
                  $lte,
                  $lte,
                },
                endDatetime: {
                  $gte,
                  $gte,
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
            select: ["id", "registrationPlate"],
          },
          agreementDetail: {
            select: ["startDatetime", "endDatetime"],
          },
          rentalAgreementDetail: {
            select: ["startLocation", "endLocation"],
            populate: {
              renter: {
                select: ["name"],
              },
            },
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
            select: ["id", "registrationPlate"],
          },
          agreementDetail: {
            select: ["startDatetime", "endDatetime"],
          },
          rentalAgreementDetail: {
            select: ["startLocation", "endLocation"],
            populate: {
              renter: {
                select: ["name"],
              },
            },
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
            select: ["id", "registrationPlate"],
          },
          agreementDetail: {
            select: ["startDatetime", "endDatetime"],
          },
        },
        where: epicEventQuery,
      });

    return [
      ...carContracts.map((event) => {
        console.log(event);
        const rentalAgreementDetail = event.rentalAgreementDetail;
        const agreementDetail = event.agreementDetail;
        const car = event.car;
        return {
          id: event.id,
          type: "CONTRACT",
          registrationPlate: car.registrationPlate,
          startLocation: rentalAgreementDetail.startLocation,
          endLocation: rentalAgreementDetail.endLocation,
          startDatetime: agreementDetail.startDatetime,
          endDatetime: agreementDetail.endDatetime,
          name: rentalAgreementDetail.renter?.name,
        };
      }),
      ...carReservations.map((event) => {
        const rentalAgreementDetail = event.rentalAgreementDetail;
        const agreementDetail = event.agreementDetail;
        const car = event.car;
        return {
          type: "RESERVATION",
          id: event.id,
          registrationPlate: car.registrationPlate,
          startLocation: rentalAgreementDetail.startLocation,
          endLocation: rentalAgreementDetail.endLocation,
          startDatetime: agreementDetail.startDatetime,
          endDatetime: agreementDetail.endDatetime,
          name: rentalAgreementDetail.renter?.name,
        };
      }),
      ...carMaintenances.map((event) => {
        const agreementDetail = event.agreementDetail;
        const car = event.car;
        return {
          id: event.id,
          type: "MAINTENANCE",
          registrationPlate: car.registrationPlate,
          startDatetime: agreementDetail.startDatetime,
          endDatetime: agreementDetail.endDatetime,
        };
      }),
    ];
  },
  isAvailable: async (carId, startDatetime, endDatetime, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const carFromDb = await strapi.query("api::car.car").findOne({
        where: {
          userGroup: loggedUserUserGroup.id,
          id: carId,
          isAvailable: true,
        },
        select: ["id", "make", "model", "registrationPlate", "isAvailable"],
      });
      if (carFromDb == null) {
        return new NotFoundError("CAR_IS_BLOCKED");
      }
      const epicEventQuery = {
        userGroup: loggedUserUserGroup.id,
        car: {
          id: { $eq: carId },
        },
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
      const isAvailable =
        [...carContracts, ...carReservations, ...carMaintenances].length === 0;
      if (isAvailable) {
        return { message: "CAR_IS_AVAILABLE" };
      } else {
        return new NotFoundError("CAR_IS_BUSY");
      }
    } catch (err) {
      return err;
    }
  },
  available: async (startDatetime, endDatetime, carType, subdomain) => {
    const days = getDays(startDatetime, endDatetime);

    const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);

    let carFilter = {
      userGroup: loggedUserUserGroup.id,
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
    const busyCarIds = [
      ...carContracts,
      ...carReservations,
      ...carMaintenances,
    ].map((event) => event?.car?.id);
    const uniqueBusyCarIds = [...new Set(busyCarIds)];
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
    console.log("days", days);
    // calculate the vehicle prices!!
    availableCarGroups = availableCarGroups.map((carGroup) => {
      let price = getLatestPriceColumn(carGroup, days);
      // we don't need to show the client the entire price column
      delete carGroup.prices;
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
    let response = [];
    for (let i = 0; i < availableCarGroups.length; i++) {
      const carGroup = availableCarGroups[i];
      const recurringDiscount = await strapi
        .service("api::recurring-discount.recurring-discount")
        .doesCarGroupHaveDiscountInGivenPeriod(
          carGroup.id,
          startDatetime,
          endDatetime,
          subdomain
        );
      const temporaryDiscount = await strapi
        .service("api::temporary-discount.temporary-discount")
        .doesCarGroupHaveDiscountInGivenPeriod(
          carGroup.id,
          startDatetime,
          endDatetime,
          subdomain
        );
      const discount =
        recurringDiscount.fixedDiscount > temporaryDiscount.fixedDiscount
          ? recurringDiscount.fixedDiscount
          : temporaryDiscount.fixedDiscount;
      const carGroupResponse = {
        ...carGroup.cars[0],
        thumbnail: carGroup.thumbnail.url,
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
}));
