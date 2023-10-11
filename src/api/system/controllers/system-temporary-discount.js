"use strict";

const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");

const {
  parseBody,
} = require("@strapi/strapi/lib/core-api/controller/transform");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createTemporaryDiscount: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data } = parseBody(ctx);
      console.log("data", data);

      const response = await strapi
        .service("api::system.system-temporary-discount")
        .createTemporaryDiscount(data, subdomain);
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
  updateTemporaryDiscount: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data } = parseBody(ctx);
      console.log("data", data);

      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-temporary-discount")
        .updateTemporaryDiscount(id, data, subdomain);
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
  deleteTemporaryDiscount: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-temporary-discount")
        .deleteTemporaryDiscount(id, subdomain);
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
};
