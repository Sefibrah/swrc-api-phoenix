"use strict";
const url = require("url");

/**
 * A set of functions called "actions" for `get-available-cars`
 */

module.exports = {
  availableCar: async (ctx, next) => {
    try {
      let subdomain = null;
      // makes sense only when i am doing it on localhost, for production this should never work
      // unless a hacker comes??
      console.log(ctx.req.headers.host);
      if (ctx.req.headers.host.includes("localhost")) {
        subdomain = "seferware";
      } else {
        const reqUrl = url.parse(`${ctx.req.headers.host}${ctx.request.url}`);
        console.log(reqUrl);
        const hostname = reqUrl.hostname;
        console.log(hostname);
        const parts = hostname.split(".");
        console.log(parts);
        if (parts.length >= 3) {
          subdomain = parts[0];
        }
      }
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
