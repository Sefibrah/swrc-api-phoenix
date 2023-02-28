"use strict";

/**
 * A set of functions called "actions" for `create-reservation`
 */

module.exports = {
  createReservation: async (ctx, next) => {
    try {
      const carId = ctx.request.body.carId;
      const time = ctx.request.body.time;
      const location = ctx.request.body.location;
      const flightNumber = ctx.request.body.flightNumber;
      const userInfo = ctx.request.body.userInfo;
      const extras = ctx.request.body.extras;
      const price = ctx.request.body.price;
      const data = await strapi
        .service("api::create-reservation.create-reservation")
        .createReservation(
          carId,
          time,
          location,
          userInfo,
          flightNumber,
          extras,
          price
        );
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
