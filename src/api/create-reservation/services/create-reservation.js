"use strict";
const jwt_decode = require("jwt-decode");

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

/**
 * create-reservation service
 */

module.exports = () => ({
  createReservation: async (
    user,
    carId,
    time,
    location,
    flightNumber,
    extras,
    price,
    subdomain
  ) => {
    let carReservation = null;
    const extrasComment = extras
      .map((extra) => extra.amount + " x " + extra.name)
      .join(", ");
    const comment =
      extrasComment + "\nCijena dodataka nije uključena u ukupnu cijenu najma";

    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });

    const carFromDb = await strapi.query("api::car.car").findOne({
      where: {
        userGroup: loggedUserUserGroup.id,
        id: carId,
      },
    });

    // fixme: not working for some weird reason...
    if (!carFromDb) {
      throw new NotFoundError("Car not found");
    }

    const userGroup = loggedUserUserGroup.id;
    if (user?.jwt != null) {
      const decoded = jwt_decode(user.jwt);
      const userId = decoded?.id;
      let userFromDb = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: { $eq: userId } },
          populate: { customer: { populate: true } },
        });
      if (userFromDb != null && loggedUserUserGroup != null) {
        carReservation = await strapi.entityService.create(
          "api::car-reservation.car-reservation",
          {
            data: {
              flightNumber,
              car: carFromDb.id,
              startLocation: location.startLocation,
              endLocation: location.endLocation,
              startDatetime: time.startDatetime,
              endDatetime: time.endDatetime,
              totalRent: price.rentPrice,
              deposit: price.deposit,
              discount: price.discount,
              renter: userFromDb.customer.id,
              author: userFromDb.customer.individual.name,
              userGroup,
              comment,
            },
          }
        );
      }
    } else {
      // fixme: idea: mozda je dobro da odradimo provjeru da li guest vec postoji?
      const name = user.info.title + " " + user.info.name;
      const contact = await strapi.entityService.create(
        "api::contact.contact",
        {
          data: {
            email: user.info.email,
            telephoneSecondary: user.info.telephone,
            userGroup,
          },
        }
      );
      const individual = await strapi.entityService.create(
        "api::individual.individual",
        {
          data: {
            contact: contact.id,
            name,
            userGroup,
          },
        }
      );
      const customer = await strapi.entityService.create(
        "api::customer.customer",
        {
          data: {
            individual: individual.id,
            contact: contact.id,
            userGroup,
            // name,
            type: "GUEST",
            isLocal: false,
          },
        }
      );
      const updatedIndividual = await strapi
        .query("api::individual.individual")
        .update({
          where: { id: individual.id },
          data: {
            customer: customer.id,
          },
        });
      const guest = await strapi.entityService.create("api::guest.guest", {
        data: {
          customer: customer.id,
          userGroup,
        },
      });
      carReservation = await strapi.entityService.create(
        "api::car-reservation.car-reservation",
        {
          data: {
            flightNumber,
            car: carFromDb.id,
            startLocation: location.startLocation,
            endLocation: location.endLocation,
            startDatetime: time.startDatetime,
            endDatetime: time.endDatetime,
            totalRent: price.rentPrice,
            deposit: price.deposit,
            discount: price.discount,
            renter: customer.id,
            author: name,
            userGroup,
            comment,
          },
        }
      );
    }
    return carReservation;
  },
});
