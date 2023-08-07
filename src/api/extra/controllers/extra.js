"use strict";

/**
 * extra controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { getSubdomainFromRequest } = require("../../../shared/get-subdomain");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/get-logged-user-user-group");

const {
  getStartAndEndDateTimeFromPayload,
} = require("../../../shared/get-start-and-end-date-time-from-payload");

module.exports = createCoreController("api::extra.extra", ({ strapi }) => ({
  isAvailable: async (ctx, next) => {
    try {
      const extraId = ctx.params.id;
      const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
        ctx.request.query
      );
      const quantity = ctx.request.query.quantity;
      const subdomain = getSubdomainFromRequest(ctx.request);

      const isAvailable = await strapi
        .service("api::extra.extra")
        .isAvailable(extraId, startDateTime, endDateTime, quantity, subdomain);

      return isAvailable;
    } catch (err) {
      ctx.body = err;
    }
  },

  available: async (ctx, next) => {
    try {
      const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
        ctx.request.query
      );
      const subdomain = getSubdomainFromRequest(ctx.request);
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const epicEventQuery = {
        userGroup: loggedUserUserGroup.id,
        $or: [
          {
            $and: [
              {
                agreementDetail: {
                  startDatetime: {
                    $gte: startDateTime,
                    $lte: endDateTime,
                  },
                  endDatetime: {
                    $gte: endDateTime,
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
                    $gte: startDateTime,
                    $lte: endDateTime,
                  },
                  startDatetime: {
                    $lte: endDateTime,
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
                    $lte: startDateTime,
                    $lte: endDateTime,
                  },
                  endDatetime: {
                    $gte: endDateTime,
                    $gte: startDateTime,
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
      const carContractRentalExtras = carContracts
        .map((carContract) => carContract.rentalExtras)
        .flat();
      const carReservationRentalExtras = carReservations
        .map((carReservation) => carReservation.rentalExtras)
        .flat();

      const mergedBusyRentalExtras = Object.values(
        [...carContractRentalExtras, ...carReservationRentalExtras].reduce(
          (acc, cur) => {
            const { extra, quantity } = cur;
            acc[extra.id] = acc[extra.id] || { id: extra.id, quantity: 0 };
            acc[extra.id].quantity += quantity;
            return acc;
          },
          {}
        )
      );

      const extras = await strapi.query("api::extra.extra").findMany({
        where: {
          userGroup: loggedUserUserGroup.id,
        },
        populate: {
          thumbnail: {
            select: ["url"],
          },
        },
      });

      return extras.map((extra) => {
        const busyRentalExtraEquivalent = mergedBusyRentalExtras.find(
          (rentalExtra) => rentalExtra.id == extra.id
        );
        if (busyRentalExtraEquivalent == null) {
          return { ...extra, thumbnail: extra.thumbnail.url };
        }
        return {
          ...extra,
          thumbnail: extra.thumbnail.url,
          quantity: extra.quantity - busyRentalExtraEquivalent.quantity,
        };
      });
    } catch (err) {
      ctx.body = err;
    }
  },
}));
