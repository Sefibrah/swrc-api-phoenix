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
  createCar: async (ctx, next) => {
    try {
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const { data } = parseBody(ctx);

      const response = await strapi
        .service("api::system.system-car")
        .createCar(data, userGroup);
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
  updateCar: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car")
        .updateCar(id, data, userGroup);
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
  deleteCar: async (ctx, next) => {
    try {
      const id = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const response = await strapi
        .service("api::system.system-car")
        .deleteCar(id, userGroup);
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
  setMileageByCarId: async (ctx, next) => {
    try {
      console.log(ctx.request.body);
      const { data } = parseBody(ctx);
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const id = ctx.request.params.id;

      const response = await strapi
        .service("api::system.system-car")
        .setMileageByCarId(id, data, userGroup);
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
  }
};
