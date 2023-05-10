"use strict";

/**
 *  car controller
 */

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  isAvailable: async (ctx, next) => {
    try {
      const carId = ctx.params.id;
      const startDatetime = new Date(ctx.request.query.startDatetime);
      const endDatetime = new Date(ctx.request.query.endDatetime);

      let subdomain = null;
      // makes sense only when i am doing it on localhost, for production this should never work
      // unless a hacker comes??
      if (ctx.req.headers.host.includes("localhost")) {
        subdomain = "seferware";
      } else {
        const host = ctx.req.headers.host;
        subdomain = host.split(".")[0];
      }

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

    let subdomain = null;
    // makes sense only when i am doing it on localhost, for production this should never work
    // unless a hacker comes??
    if (ctx.req.headers.host.includes("localhost")) {
      subdomain = "seferware";
    } else {
      const host = ctx.req.headers.host;
      subdomain = host.split(".")[0];
    }

    const availableCars = await strapi
      .service("api::car.car")
      .available(startDatetime, endDatetime, carType, subdomain);

    return availableCars;
  },
}));
