"use strict";

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
      const body = ctx.request.body;
      const response = await strapi
        .service("api::system.system-car-maintenance")
        .createCarMaintenance(body, subdomain);
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
      const body = ctx.request.body;
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car-maintenance")
        .updateCarMaintenance(id, body, subdomain);
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
