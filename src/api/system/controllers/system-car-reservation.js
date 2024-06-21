"use strict";

const {
  parseBody,
} = require("../../../../node_modules/@strapi/strapi/dist/core-api/controller/transform.js");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createCarReservation: async (ctx, next) => {
    try {
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const { data } = parseBody(ctx);
      const query = ctx.request.query;

      const { id, ...attributes } = await strapi
        .service("api::system.system-car-reservation")
        .createCarReservation(
          data.reservation,
          data.rentalAgreementDetail,
          data.agreementDetail,
          data.transaction,
          data.rentalExtras,
          query,
          userGroup
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  updateCarReservation: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const query = ctx.request.query;

      const reservationId = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

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
          userGroup
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteCarReservation: async (ctx, next) => {
    try {
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      await strapi
        .service("api::system.system-car-reservation")
        .deleteCarReservation(id, userGroup);
      ctx.body = { data: {}, isSuccess: true };
    } catch (err) {
      ctx.body = err;
    }
  },
};
