"use strict";
const url = require("url");

/**
 * A set of functions called "actions" for `create-reservation`
 */

module.exports = {
  createReservation: async (ctx, next) => {
    try {
      let subdomain = null;
      // makes sense only when i am doing it on localhost, for production this should never work
      // unless a hacker comes??
      console.log(ctx.req.headers.host);
      if (ctx.req.headers.host.includes("localhost")) {
        subdomain = "seferware";
      } else {
        const host = ctx.req.headers.host;
        subdomain = host.split(".")[0];
      }
      const jwt =
        ctx.request.header?.authorization?.replace("Bearer ", "") || null;
      const carId = ctx.request.body.carId;
      const time = ctx.request.body.time;
      const location = ctx.request.body.location;
      const flightNumber = ctx.request.body.flightNumber;
      const userInfo = ctx.request.body?.userInfo;
      const extras = ctx.request.body.extras;
      const price = ctx.request.body.price;
      const user = { info: userInfo, jwt };
      const data = await strapi
        .service("api::create-reservation.create-reservation")
        .createReservation(
          user,
          carId,
          time,
          location,
          flightNumber,
          extras,
          price,
          subdomain
        );
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
