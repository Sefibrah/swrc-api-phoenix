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
  createExtra: async (ctx, next) => {
    try {
      const { data, files } = parseBody(ctx);

      const userGroup = await getUserGroupId(strapi, ctx.request);
      const response = await strapi
        .service("api::system.system-extra")
        .createExtra(data, files, userGroup);
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
      const { data, files } = parseBody(ctx);
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-extra")
        .updateExtra(id, data, files, userGroup);
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
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const response = await strapi
        .service("api::system.system-extra")
        .deleteExtra(id, userGroup);
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
