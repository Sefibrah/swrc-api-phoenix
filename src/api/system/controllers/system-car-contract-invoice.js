"use strict";

const {
  parseBody,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createCarContractInvoice: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const response = await strapi
        .service("api::system.system-car-contract-invoice")
        .createCarContractInvoice(data, userGroup);
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
      const { data } = parseBody(ctx);
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-car-contract-invoice")
        .updateCarContractInvoice(id, data, userGroup);
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
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-car-contract-invoice")
        .deleteCarContractInvoice(id, userGroup);
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
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const latest = await strapi
        .service("api::system.system-car-contract-invoice")
        .getLatestInvoice(userGroup);
      ctx.body = latest;
      return latest;
    } catch (err) {
      ctx.body = err;
    }
  },
};
