"use strict";

const { getSubdomainFromRequest } = require("../../../shared/get-subdomain");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createFullContractFromSystem: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body;
      const query = ctx.request.query;

      const { id, ...attributes } = await strapi
        .service("api::system.system-contract")
        .createFullContractFromSystem(
          body.contract,
          body.rentalAgreementDetail,
          body.agreementDetail,
          body.transaction,
          body.rentalExtras,
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
  updateFullContractFromSystem: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body;
      const query = ctx.request.query;

      const contractId = ctx.request.params.id;

      const { id, ...attributes } = await strapi
        .service("api::system.system-contract")
        .updateFullContractFromSystem(
          contractId,
          body.contract,
          body.rentalAgreementDetail,
          body.agreementDetail,
          body.transaction,
          body.rentalExtras,
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
  deleteFullContractFromSystem: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const contractId = ctx.request.params.id;

      await strapi
        .service("api::system.system-contract")
        .deleteFullContractFromSystem(contractId, subdomain);
      ctx.body = { data: {}, isSuccess: true };
    } catch (err) {
      ctx.body = err;
    }
  },
};
