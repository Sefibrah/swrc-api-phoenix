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
  createExtra: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data, files } = parseBody(ctx);
      console.log("data", data, "files", files);

      const response = await strapi
        .service("api::system.system-extra")
        .createExtra(data, files, subdomain);
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
  updateExtra: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);

      const { data, files } = parseBody(ctx);
      console.log("data", data, "files", files);

      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-extra")
        .updateExtra(id, data, files, subdomain);
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
  deleteExtra: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-extra")
        .deleteExtra(id, subdomain);
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
