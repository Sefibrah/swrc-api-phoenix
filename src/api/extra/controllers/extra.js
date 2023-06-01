"use strict";

/**
 * extra controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { getSubdomainFromRequest } = require("../../../shared/get-subdomain");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/get-logged-user-user-group");

module.exports = createCoreController("api::extra.extra", ({ strapi }) => ({
  isAvailable: async (ctx, next) => {
    try {
      const extraId = ctx.params.id;
      const startDatetime = new Date(ctx.request.query.startDatetime);
      const endDatetime = new Date(ctx.request.query.endDatetime);
      const quantity = ctx.request.query.quantity;
      const subdomain = getSubdomainFromRequest(ctx.request);

      const isAvailable = await strapi
        .service("api::extra.extra")
        .isAvailable(extraId, startDatetime, endDatetime, quantity, subdomain);

      return isAvailable;
    } catch (err) {
      ctx.body = err;
    }
  },

  available: async (ctx, next) => {
    try {
      const startDatetime = new Date(ctx.request.query.startDatetime);
      const endDatetime = new Date(ctx.request.query.endDatetime);
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
      });

      return extras.map((extra) => {
        const { id, name, description, quantity, price } = extra;
        const busyRentalExtraEquivalent = mergedBusyRentalExtras.find(
          (rentalExtra) => rentalExtra.id == id
        );
        return {
          id,
          name,
          description,
          price,
          quantity: quantity - busyRentalExtraEquivalent.quantity,
        };
      });
    } catch (err) {
      ctx.body = err;
    }
  },
}));
