"use strict";

const {
  parseBody,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");
const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createCarReservation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const query = ctx.request.query;

      console.log(body, query, subdomain);

      const { id, ...attributes } = await strapi
        .service("api::system.system-car-reservation")
        .createCarReservation(
          data.reservation,
          data.rentalAgreementDetail,
          data.agreementDetail,
          data.transaction,
          data.rentalExtras,
          query,
          subdomain
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  updateCarReservation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const query = ctx.request.query;

      const reservationId = ctx.request.params.id;

      const { id, ...attributes } = await strapi
        .service("api::system.system-car-reservation")
        .updateCarReservation(
          reservationId,
          data.reservation,
          data.rentalAgreementDetail,
          data.agreementDetail,
          data.transaction,
          data.rentalExtras,
          query,
          subdomain
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteCarReservation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const reservationId = ctx.request.params.id;

      await strapi
        .service("api::system.system-car-reservation")
        .deleteCarReservation(reservationId, subdomain);
      ctx.body = { data: {}, isSuccess: true };
    } catch (err) {
      ctx.body = err;
    }
  },
};
