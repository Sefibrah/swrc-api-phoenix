"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");
const {
  getRandomString,
} = require("../../../shared/functions/get-random-string");
const { getJwt } = require("../../../shared/functions/get-jwt");
const {
  getStartAndEndDateTimeFromPayload,
} = require("../../../shared/functions/get-start-and-end-date-time-from-payload");
const { getDays } = require("../../../shared/functions/get-days");
const {
  getLoggedUserUserGroup,
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");
const fs = require("fs");
const util = require("util");
const {
  getLatestPriceColumn,
} = require("../../../shared/functions/get-latest-price-column");

/**
 * A set of functions called "actions" for `consumer`
 */

module.exports = {
  createReservationFromCar: async (ctx, next) => {
    const { userGroup } = await getConsumerProps(strapi, ctx);
    const {
      id,
      startDateTime,
      endDateTime,
      startLocation,
      endLocation,
      flightNumber,
      user,
      rentalExtras,
    } = getConsumerPostProps(ctx.request);

    const reservation = await strapi
      .service("api::consumer.consumer")
      .createReservationFromCar(
        id,
        startDateTime,
        endDateTime,
        user,
        startLocation,
        endLocation,
        rentalExtras,
        flightNumber,
        userGroup
      );

    return reservation;
  },
  createReservationFromGroupedCar: async (ctx, next) => {
    const { userGroup } = await getConsumerProps(strapi, ctx);
    const {
      id,
      startDateTime,
      endDateTime,
      startLocation,
      endLocation,
      flightNumber,
      user,
      rentalExtras,
    } = getConsumerPostProps(ctx.request);

    const reservation = await strapi
      .service("api::consumer.consumer")
      .createReservationFromGroupedCar(
        id,
        startDateTime,
        endDateTime,
        user,
        startLocation,
        endLocation,
        rentalExtras,
        flightNumber,
        userGroup
      );

    return reservation;
  },
  getCarReservationById: async (ctx, next) => {},
  getCarGroupedReservationById: async (ctx, next) => {},
  getCarGroupReservationByCode: async (ctx, next) => {
    const { code, userGroup } = await getConsumerProps(strapi, ctx);

    const reservation = await strapi
      .service("api::consumer.consumer")
      .getCarGroupedReservationByCode(code, userGroup);

    return reservation;
  },
  getCarReservationByCode: async (ctx, next) => {
    const { code, userGroup } = await getConsumerProps(strapi, ctx);

    const reservation = await strapi
      .service("api::consumer.consumer")
      .getCarReservationByCode(code, userGroup);

    return reservation;
  },
  getCarOffers: async (ctx, next) => {
    const { startDateTime, endDateTime, vehicleType, userGroup } =
      await getConsumerProps(strapi, ctx);

    const offers = await strapi
      .service("api::consumer.consumer")
      .getCarOffers(startDateTime, endDateTime, vehicleType, userGroup);

    return offers;
  },
  getCarGroupedOffers: async (ctx, next) => {
    const { startDateTime, endDateTime, vehicleType, userGroup } =
      await getConsumerProps(strapi, ctx);

    const offers = await strapi
      .service("api::consumer.consumer")
      .getCarGroupedOffers(startDateTime, endDateTime, vehicleType, userGroup);

    return offers;
  },
  getCarOffer: async (ctx, next) => {
    const { id, startDateTime, endDateTime, userGroup } =
      await getConsumerProps(strapi, ctx);

    const offer = await strapi
      .service("api::consumer.consumer")
      .getCarOffer(id, startDateTime, endDateTime, userGroup);

    return offer;
  },
  getCarGroupedOffer: async (ctx, next) => {
    const { id, startDateTime, endDateTime, userGroup } =
      await getConsumerProps(strapi, ctx);

    const offer = await strapi
      .service("api::consumer.consumer")
      .getCarGroupedOffer(id, startDateTime, endDateTime, userGroup);

    return offer;
  },
};

async function getConsumerProps(strapi, ctx) {
  const id = +ctx.params?.id;
  const code = ctx.params?.code;
  const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
    ctx.request.query
  );
  const vehicleType = ctx.request.query.vehicleType;
  const userGroup = await getUserGroupId(strapi, ctx.request);
  return { id, code, startDateTime, endDateTime, vehicleType, userGroup };
}

function getConsumerPostProps(ctxRequest) {
  const id = +ctxRequest.params.id;
  const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
    ctxRequest.body
  );
  const startLocation = ctxRequest.body.startLocation;
  const endLocation = ctxRequest.body.endLocation;
  const flightNumber = ctxRequest.body.flightNumber;
  const userInfo = ctxRequest.body.user;
  const rentalExtras = ctxRequest.body.extras;
  const jwt = getJwt(ctxRequest);
  const user = { info: userInfo, jwt };
  return {
    id,
    startDateTime,
    endDateTime,
    startLocation,
    endLocation,
    flightNumber,
    user,
    rentalExtras,
  };
}
