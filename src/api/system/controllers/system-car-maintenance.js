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
  createCarMaintenance: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const response = await strapi
        .service("api::system.system-car-maintenance")
        .createCarMaintenance(data, subdomain);
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
  updateCarMaintenance: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-maintenance")
        .updateCarMaintenance(id, data, subdomain);
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
  deleteCarMaintenance: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-maintenance")
        .deleteCarMaintenance(id, subdomain);
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
