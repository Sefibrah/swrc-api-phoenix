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
  createCarContract: async (ctx, next) => {
    try {
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const { data } = parseBody(ctx);
      const query = ctx.request.query;

      const { id, ...attributes } = await strapi
        .service("api::system.system-car-contract")
        .createCarContract(
          data.contract,
          data.rentalAgreementDetail,
          data.agreementDetail,
          data.transaction,
          data.rentalExtras,
          query,
          userGroup
        );
      if (attributes?.name === "NotFoundError") {
        ctx.send({ ...attributes }, 404);
      } else {
        ctx.send({ data: { id, attributes } }, 201);
      }
      return ctx.body;
    } catch (err) {
      ctx.body = err;
    }
  },
  updateCarContract: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const query = ctx.request.query;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const contractId = ctx.request.params.id;

      const { id, ...attributes } = await strapi
        .service("api::system.system-car-contract")
        .updateCarContract(
          contractId,
          data.contract,
          data.rentalAgreementDetail,
          data.agreementDetail,
          data.transaction,
          data.rentalExtras,
          query,
          userGroup
        );
      if (attributes.name === "NotFoundError") {
        ctx.body = { ...attributes };
      } else {
        ctx.body = { data: { id, attributes } };
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteCarContract: async (ctx, next) => {
    try {
      const contractId = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      await strapi
        .service("api::system.system-car-contract")
        .deleteCarContract(contractId, userGroup);
      ctx.body = { data: {}, isSuccess: true };
    } catch (err) {
      ctx.body = err;
    }
  },
};
