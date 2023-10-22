"use strict";

const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createCarContractInvoice: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body;
      console.log("body", body);
      const response = await strapi
        .service("api::system.system-car-contract-invoice")
        .createCarContractInvoice(body, subdomain);
      console.log("response", response);
      if (
        response?.name == "NotFoundError" ||
        response?.name == "ValidationError"
      ) {
        ctx.send(response, 400);
      } else {
        ctx.send({ data: response }, 201);
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  updateCarContractInvoice: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body;
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-contract-invoice")
        .updateCarContractInvoice(id, body, subdomain);
      console.log("response", response);
      if (
        response?.name == "NotFoundError" ||
        response?.name == "ValidationError"
      ) {
        ctx.send(response, 400);
      } else {
        ctx.send({ data: response }, 201);
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteCarContractInvoice: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-contract-invoice")
        .deleteCarContractInvoice(id, subdomain);
      console.log("response", response);
      if (
        response?.name == "NotFoundError" ||
        response?.name == "ValidationError"
      ) {
        ctx.send(response, 400);
      } else {
        ctx.send({ data: response }, 201);
      }
    } catch (err) {
      ctx.body = err;
    }
  },

  getLatestInvoice: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const latest = await strapi
        .service("api::system.system-car-contract-invoice")
        .getLatestInvoice(subdomain);
      ctx.body = latest;
      return latest;
    } catch (err) {
      ctx.body = err;
    }
  },
};
