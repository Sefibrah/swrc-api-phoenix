"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const { getJwt } = require("../../../shared/functions/get-jwt");
const {
  getStartAndEndDateTimeFromPayload,
} = require("../../../shared/functions/get-start-and-end-date-time-from-payload");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * A set of functions called "actions" for `consumer`
 */

module.exports = {
  createReservationFromCar: async (ctx, next) => {
    if (isStartAndEndDateTimeValid(ctx.request.body)) {
      throw new ValidationError("Invalid start and end date time");
    }
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.body
    );
    const { userGroup } = await getConsumerProps(strapi, ctx);
    const { id, startLocation, endLocation, flightNumber, user, rentalExtras } =
      getConsumerPostProps(ctx.request);

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
    if (isStartAndEndDateTimeValid(ctx.request.body)) {
      throw new ValidationError("Invalid start and end date time");
    }
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.body
    );
    const { userGroup } = await getConsumerProps(strapi, ctx);
    const { id, startLocation, endLocation, flightNumber, user, rentalExtras } =
      getConsumerPostProps(ctx.request);

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
  getCarReservationByIdOrCode: async (ctx, next) => {
    const { idOrCode, userGroup } = await getConsumerProps(strapi, ctx);

    const reservation = await strapi
      .service("api::consumer.consumer")
      .getCarReservationByIdOrCode(idOrCode, userGroup);

    return reservation;
  },
  getCarGroupedReservationById: async (ctx, next) => {
    const { id, userGroup } = await getConsumerProps(strapi, ctx);

    const reservation = await strapi
      .service("api::consumer.consumer")
      .getCarGroupedReservationById(id, userGroup);

    return reservation;
  },
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
    if (isStartAndEndDateTimeValid(ctx.request.query)) {
      throw new ValidationError("Invalid start and end date time");
    }
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.query
    );
    const { vehicleType, userGroup } = await getConsumerProps(strapi, ctx);

    const offers = await strapi
      .service("api::consumer.consumer")
      .getCarOffers(startDateTime, endDateTime, vehicleType, userGroup);

    return offers;
  },
  getCarGroupedOffers: async (ctx, next) => {
    if (isStartAndEndDateTimeValid(ctx.request.query)) {
      throw new ValidationError("Invalid start and end date time");
    }
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.query
    );
    const { vehicleType, userGroup } = await getConsumerProps(strapi, ctx);

    const offers = await strapi
      .service("api::consumer.consumer")
      .getCarGroupedOffers(startDateTime, endDateTime, vehicleType, userGroup);

    return offers;
  },
  getCarOffer: async (ctx, next) => {
    if (isStartAndEndDateTimeValid(ctx.request.query)) {
      throw new ValidationError("Invalid start and end date time");
    }
    const { startDateTime, endDateTime } = getStartAndEndDateTimeFromPayload(
      ctx.request.query
    );
    const { id, userGroup } = await getConsumerProps(strapi, ctx);

    const offer = await strapi
      .service("api::consumer.consumer")
      .getCarOffer(id, startDateTime, endDateTime, userGroup);

    if (offer.name === "NotFoundError") {
      ctx.send(offer, 404);
    } else {
      ctx.send(offer, 200);
    }
  },
  getCarGroupedOffer: async (ctx, next) => {
    const { id, startDateTime, endDateTime, userGroup } =
      await getConsumerProps(strapi, ctx);

    const offer = await strapi
      .service("api::consumer.consumer")
      .getCarGroupedOffer(id, startDateTime, endDateTime, userGroup);

    if (offer.name === "NotFoundError") {
      ctx.send(offer, 404);
    } else {
      ctx.send(offer, 200);
    }
  },
};

async function getConsumerProps(strapi, ctx) {
  const id = +ctx.params?.id;
  const code = ctx.params?.code;
  const idOrCode = ctx.params?.idOrCode;
  const vehicleType = ctx.request.query.vehicleType;
  const userGroup = await getUserGroupId(strapi, ctx.request);
  return { id, code, idOrCode, vehicleType, userGroup };
}

function getConsumerPostProps(ctxRequest) {
  const id = +ctxRequest.params.id;
  const startLocation = ctxRequest.body.startLocation;
  const endLocation = ctxRequest.body.endLocation;
  const flightNumber = ctxRequest.body.flightNumber;
  const userInfo = ctxRequest.body.user;
  const rentalExtras = ctxRequest.body.extras;
  const jwt = getJwt(ctxRequest);
  const user = { info: userInfo, jwt };
  return {
    id,
    startLocation,
    endLocation,
    flightNumber,
    user,
    rentalExtras,
  };
}

function isStartAndEndDateTimeValid({
  puDay,
  puMonth,
  puYear,
  puMinute,
  puHour,
  doDay,
  doMonth,
  doYear,
  doMinute,
  doHour,
}) {
  return (
    !puDay ||
    !puMonth ||
    !puYear ||
    !puMinute ||
    !puHour ||
    !doDay ||
    !doMonth ||
    !doYear ||
    !doMinute ||
    !doHour
  );
}
