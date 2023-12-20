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
  createCarContract: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
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
          subdomain
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
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const query = ctx.request.query;

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
          subdomain
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
      const subdomain = getSubdomainFromRequest(ctx.request);
      const contractId = ctx.request.params.id;

      await strapi
        .service("api::system.system-car-contract")
        .deleteCarContract(contractId, subdomain);
      ctx.body = { data: {}, isSuccess: true };
    } catch (err) {
      ctx.body = err;
    }
  },
};
