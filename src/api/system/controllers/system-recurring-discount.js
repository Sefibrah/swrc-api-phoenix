"use strict";

const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

const {
  parseBody,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createRecurringDiscount: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);

      const userGroup = await getUserGroupId(strapi, ctx.request);
      const response = await strapi
        .service("api::system.system-recurring-discount")
        .createRecurringDiscount(data, userGroup);
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
  updateRecurringDiscount: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);

      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-recurring-discount")
        .updateRecurringDiscount(id, data, userGroup);
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
  deleteRecurringDiscount: async (ctx, next) => {
    try {
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-recurring-discount")
        .deleteRecurringDiscount(id, userGroup);
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
