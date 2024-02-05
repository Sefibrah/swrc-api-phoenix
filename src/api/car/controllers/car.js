"use strict";

/**
 *  car controller
 */

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

const { createCoreController } = require("@strapi/strapi").factories;

const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getStartAndEndDateTimeFromPayload,
} = require("../../../shared/functions/get-start-and-end-date-time-from-payload");

module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  relevantEventsList: async (ctx, next) => {
    try {
      const carId = ctx.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const relevantEventsList = await strapi
        .service("api::car.car")
        .relevantEventsList(carId, userGroup);
      ctx.body = relevantEventsList;
    } catch (err) {
      ctx.body = err;
    }
  },

  isAvailable: async (ctx, next) => {
    try {
      const carId = ctx.params.id;
      const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
        ctx.request.query
      );
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const isAvailable = await strapi
        .service("api::car.car")
        .isAvailable(carId, startDateTime, endDateTime, userGroup);
      ctx.body = isAvailable;
    } catch (err) {
      ctx.body = err;
    }
  },

  available: async (ctx, next) => {
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.query
    );
    const vehicleType = ctx.request.query.vehicleType;
    const userGroup = await getUserGroupId(strapi, ctx.request);

    const availableCars = await strapi
      .service("api::car.car")
      .available(startDateTime, endDateTime, vehicleType, userGroup);

    return availableCars;
  },
}));
