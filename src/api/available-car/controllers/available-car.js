"use strict";
const url = require("url");

/**
 * A set of functions called "actions" for `get-available-cars`
 */

module.exports = {
  availableCar: async (ctx, next) => {
    try {
      const reqUrl = url.parse(ctx.request.url);
      const hostname = reqUrl.hostname;
      const parts = hostname.split(".");
      let subdomain = null;
      if (parts.length >= 3) {
        subdomain = parts[0];
      }
      // makes sense only when i am doing it on localhost, for production this should never work
      // unless a hacker comes??
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
