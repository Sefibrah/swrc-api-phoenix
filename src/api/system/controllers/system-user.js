"use strict";

const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");

const {
  parseBody,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createSystemUser: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data } = parseBody(ctx);
      console.log("data", data);

      const response = await strapi
        .service("api::system.system-user")
        .createSystemUser(data, subdomain);
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
  updateSystemUser: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data } = parseBody(ctx);
      console.log("data", data);

      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-user")
        .updateSystemUser(id, data, subdomain);
      console.log("response", response);
      if (
        response?.name == "NotFoundError" ||
        response?.name == "ValidationError"
      ) {
        ctx.send(response, 400);
      } else {
        ctx.send({ data: response }, 200);
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteSystemUser: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-user")
        .deleteSystemUser(id, subdomain);
      console.log("response", response);
      if (
        response?.name == "NotFoundError" ||
        response?.name == "ValidationError"
      ) {
        ctx.send(response, 400);
      } else {
        ctx.send({ data: response }, 200);
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};