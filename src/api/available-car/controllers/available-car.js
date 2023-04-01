"use strict";

/**
 * A set of functions called "actions" for `get-available-cars`
 */

module.exports = {
  availableCar: async (ctx, next) => {
    try {
      let subdomain = ctx.request.header.host.split(".")[0];
      if (subdomain === "localhost:1337") subdomain = "seferware";
      const startDatetime = new Date(ctx.request.query.startDatetime);
      const endDatetime = new Date(ctx.request.query.endDatetime);
      const carType = ctx.request.query.carType;
      const data = await strapi
        .service("api::available-car.available-car")
        .availableCar(subdomain, startDatetime, endDatetime, carType);
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
