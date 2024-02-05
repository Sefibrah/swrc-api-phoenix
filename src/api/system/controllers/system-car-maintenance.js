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
  createCarMaintenance: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const response = await strapi
        .service("api::system.system-car-maintenance")
        .createCarMaintenance(data, userGroup);
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
      const { data } = parseBody(ctx);
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-car-maintenance")
        .updateCarMaintenance(id, data, userGroup);
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
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-car-maintenance")
        .deleteCarMaintenance(id, userGroup);
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
