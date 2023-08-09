"use strict";
const { getDays } = require("../../../shared/get-days");

/**
 * car service.
 */

const { createCoreService } = require("@strapi/strapi").factories;
const {
  getLoggedUserUserGroup,
} = require("../../../shared/get-logged-user-user-group");

module.exports = createCoreService("api::car.car", ({ strapi }) => ({
  isAvailable: async (carId, startDatetime, endDatetime, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

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
        return {
          status: 202,
          message: "CAR_IS_AVAILABLE",
        };
      } else {
        return {
          data: null,
          error: {
            status: 404,
            name: "NotFoundError",
            message: "CAR_IS_BUSY",
            details: {},
          },
        };
      }
    } catch (err) {
      return err;
    }
  },
  available: async (startDatetime, endDatetime, carType, subdomain) => {
    const days = getDays(startDatetime, endDatetime)

    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });

    let carFilter = {
      userGroup: loggedUserUserGroup.id,
    };
    if (carType != null && carType != "") {
      carFilter = {
        ...carFilter,
        cars: {
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
        (car) => !uniqueBusyCarIds.includes(car.id) && car.isAvailable
      );
    });
    let availableCarGroups = carGroups.filter(
      (carGroup) => carGroup.cars.length > 0
    );
    // calculate the vehicle prices!!
    availableCarGroups = availableCarGroups.map((carGroup) => {
      let price = null;
      if (carGroup.prices.length > 0) {
        let closestPriceColumn = carGroup.prices.reduce((prev, curr) =>
          Math.abs(curr.minDays - days) < Math.abs(prev.minDays - days)
            ? curr
            : prev
        );
        price =
          carGroup.prices.find(
            (price) => closestPriceColumn.minDays === price.minDays
          ).amount * days;
      }
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
    const response = availableCarGroups
      .filter((carGroup) => carGroup.name != "POMOCNO VOZILO")
      .map((carGroup) => {
        const discount = carGroup.cars[0].discount || 0;
        return {
          ...carGroup.cars[0],
          thumbnail: carGroup.thumbnail.url,
          name: carGroup.name,
          priceNoDiscount: carGroup.price,
          id: carGroup.id,
          price: carGroup.price - (carGroup.price * discount) / 100,
          // add discount if it's during winter
          discount,
        };
      });
    return response;
  },
}));
