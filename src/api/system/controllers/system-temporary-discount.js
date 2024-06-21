"use strict";

const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

const {
  parseBody,
} = require("../../../../node_modules/@strapi/strapi/dist/core-api/controller/transform.js");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createTemporaryDiscount: async (ctx, next) => {
    try {
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { data } = parseBody(ctx);

      const response = await strapi
        .service("api::system.system-temporary-discount")
        .createTemporaryDiscount(data, userGroup);
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
      const { data } = parseBody(ctx);

      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-temporary-discount")
        .updateTemporaryDiscount(id, data, userGroup);
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
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-temporary-discount")
        .deleteTemporaryDiscount(id, userGroup);
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
