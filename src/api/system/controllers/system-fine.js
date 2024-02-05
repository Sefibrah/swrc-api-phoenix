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
  createCarContractFine: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const contractId = data.carContract;
      const fineBody = data.fine;
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const response = await strapi
        .service("api::system.system-fine")
        .createCarContractFine(contractId, fineBody, userGroup);
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
  updateCarContractFine: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const contractId = data.carContract;
      const fineBody = data.fine;
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-fine")
        .updateCarContractFine(id, contractId, fineBody, userGroup);
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
  deleteCarContractFine: async (ctx, next) => {
    try {
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-fine")
        .deleteCarContractFine(id, userGroup);
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
