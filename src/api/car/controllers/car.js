"use strict";

/**
 *  car controller
 */

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

const { createCoreController } = require("@strapi/strapi").factories;

const { getSubdomainFromRequest } = require("../../../shared/functions/get-subdomain");
const {
  getStartAndEndDateTimeFromPayload,
} = require("../../../shared/functions/get-start-and-end-date-time-from-payload");

module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  relevantEventsList: async (ctx, next) => {
    try {
      const carId = ctx.params.id;
      const subdomain = getSubdomainFromRequest(ctx.request);
      const relevantEventsList = await strapi
        .service("api::car.car")
        .relevantEventsList(carId, subdomain);
      ctx.body = relevantEventsList;
    } catch (err) {
      ctx.body = err;
    }
  },

  isAvailable: async (ctx, next) => {
    try {
      const carId = ctx.params.id;
      const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
        ctx.request.query
      );
      const subdomain = getSubdomainFromRequest(ctx.request);

      const isAvailable = await strapi
        .service("api::car.car")
        .isAvailable(carId, startDateTime, endDateTime, subdomain);
      ctx.body = isAvailable;
    } catch (err) {
      ctx.body = err;
    }
  },

  available: async (ctx, next) => {
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.query
    );
    const vehicleType = ctx.request.query.vehicleType;
    const subdomain = getSubdomainFromRequest(ctx.request);

    const availableCars = await strapi
      .service("api::car.car")
      .available(startDateTime, endDateTime, vehicleType, subdomain);

    return availableCars;
  },
}));
