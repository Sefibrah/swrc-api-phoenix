"use strict";

/**
 * extra service
 */

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::extra.extra", ({ strapi }) => ({
  isAvailable: async (
    extraId,
    startDatetime,
    endDatetime,
    quantity,
    userGroup
  ) => {
    try {
      const epicEventQuery = {
        userGroup,
        rentalExtras: {
          extra: {
            id: {
              $eq: extraId,
            },
          },
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
            rentalExtras: {
              select: ["quantity"],
              populate: {
                extra: {
                  select: ["id"],
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
              select: ["id"],
            },
            agreementDetail: {
              select: ["startDatetime", "endDatetime"],
            },
            rentalExtras: {
              select: ["quantity"],
              populate: {
                extra: {
                  select: ["id"],
                },
              },
            },
          },
          where: epicEventQuery,
        });
      const carContractRentalExtras = carContracts.map(
        (carContract) => carContract.rentalExtras
      );
      const carReservationRentalExtras = carReservations.map(
        (carReservation) => carReservation.rentalExtras
      );
      const busyExtraCount = [
        ...carContractRentalExtras,
        ...carReservationRentalExtras,
      ].reduce((acc, cur) => {
        const i = cur.findIndex(
          (rentalExtra) => rentalExtra.extra.id == extraId
        );
        return (acc += cur[i].quantity);
      }, 0);
      const extra = await strapi.query("api::extra.extra").findOne({
        where: {
          id: { $eq: extraId },
        },
      });
      const extraQuantity = extra.quantity;
      const availableExtrasCount = extraQuantity - busyExtraCount;
      if (availableExtrasCount >= quantity) {
        return { message: "EXTRA_IS_AVAILABLE", code: 200 };
      } else {
        return new NotFoundError("EXTRA_IS_BUSY");
      }
    } catch (err) {
      return err;
    }
  },
}));
