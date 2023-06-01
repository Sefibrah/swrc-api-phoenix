"use strict";

/**
 *  car controller
 */

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

const { createCoreController } = require("@strapi/strapi").factories;

const { getSubdomainFromRequest } = require("../../../shared/get-subdomain");

module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  isAvailable: async (ctx, next) => {
    try {
      const carId = ctx.params.id;
      const startDatetime = new Date(ctx.request.query.startDatetime);
      const endDatetime = new Date(ctx.request.query.endDatetime);
      const subdomain = getSubdomainFromRequest(ctx.request);

      const isAvailable = await strapi
        .service("api::car.car")
        .isAvailable(carId, startDatetime, endDatetime, subdomain);
      ctx.body = isAvailable;
    } catch (err) {
      ctx.body = err;
    }
  },

  available: async (ctx, next) => {
    const startDatetime = new Date(ctx.request.query.startDatetime);
    const endDatetime = new Date(ctx.request.query.endDatetime);
    const carType = ctx.request.query.carType;
    const subdomain = getSubdomainFromRequest(ctx.request);

    const availableCars = await strapi
      .service("api::car.car")
      .available(startDatetime, endDatetime, carType, subdomain);

    return availableCars;
  },
}));
