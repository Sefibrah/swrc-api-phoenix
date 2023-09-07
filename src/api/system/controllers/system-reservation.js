"use strict";

const { getSubdomainFromRequest } = require("../../../shared/functions/get-subdomain");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createFullReservationFromSystem: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body;
      const query = ctx.request.query;

      console.log(body, query, subdomain);

      const { id, ...attributes } = await strapi
        .service("api::system.system-reservation")
        .createFullReservationFromSystem(
          body.reservation,
          body.rentalAgreementDetail,
          body.agreementDetail,
          body.transaction,
          body.rentalExtras,
          query,
          subdomain
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  updateFullReservationFromSystem: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body;
      const query = ctx.request.query;

      const reservationId = ctx.request.params.id;

      const { id, ...attributes } = await strapi
        .service("api::system.system-reservation")
        .updateFullReservationFromSystem(
          reservationId,
          body.reservation,
          body.rentalAgreementDetail,
          body.agreementDetail,
          body.transaction,
          body.rentalExtras,
          query,
          subdomain
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteFullReservationFromSystem: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const reservationId = ctx.request.params.id;

      await strapi
        .service("api::system.system-reservation")
        .deleteFullReservationFromSystem(reservationId, subdomain);
      ctx.body = { data: {}, isSuccess: true };
    } catch (err) {
      ctx.body = err;
    }
  },
};
