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
  createCarGroup: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data, files } = parseBody(ctx);
      console.log("data", data, "files", files);

      const response = await strapi
        .service("api::system.system-car-group")
        .createCarGroup(data, files, subdomain);
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
  updateCarGroup: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data, files } = parseBody(ctx);
      console.log("data", data, "files", files);

      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-group")
        .updateCarGroup(id, data, files, subdomain);
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
  deleteCarGroup: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-group")
        .deleteCarGroup(id, subdomain);
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
