"use strict";
const jwt_decode = require("jwt-decode");

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
    price
  ) => {
    let carReservation = null;
    const extrasComment = extras
      .map((extra) => extra.amount + " x " + extra.name)
      .join(", ");
    const comment =
      extrasComment + "\nCijena dodataka nije uključena u ukupnu cijenu najma";
    if (user?.jwt != null) {
      const decoded = jwt_decode(user.jwt);
      const userId = decoded?.id;
      let userFromDb = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id: { $eq: userId } },
          populate: { customer: { populate: true } },
        });
      if (userFromDb != null) {
        carReservation = await strapi.entityService.create(
          "api::car-reservation.car-reservation",
          {
            data: {
              flightNumber,
              car: carId,
              startLocation: location.startLocation,
              endLocation: location.endLocation,
              startDatetime: time.startDatetime,
              endDatetime: time.endDatetime,
              totalRent: price.rentPrice,
              deposit: price.deposit,
              discount: price.discount,
              renter: userFromDb.customer.id,
              author: userFromDb.customer.individual.name,
              comment,
            },
          }
        );
        console.log(carReservation);
      }
    } else {
      const name = user.info.title + " " + user.info.name;
      const contact = await strapi.entityService.create(
        "api::contact.contact",
        {
          data: {
            email: user.info.email,
            telephoneSecondary: user.info.telephone,
          },
        }
      );
      const individual = await strapi.entityService.create(
        "api::individual.individual",
        {
          data: {
            contact: contact.id,
          },
        }
      );
      const customer = await strapi.entityService.create(
        "api::customer.customer",
        {
          data: {
            individual: individual.id,
            contact: contact.id,
            name,
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
      console.log(contact, individual, customer, updatedIndividual);
      const guest = await strapi.entityService.create("api::guest.guest", {
        data: {
          customer: customer.id,
        },
      });
      carReservation = await strapi.entityService.create(
        "api::car-reservation.car-reservation",
        {
          data: {
            flightNumber,
            car: carId,
            startLocation: location.startLocation,
            endLocation: location.endLocation,
            startDatetime: time.startDatetime,
            endDatetime: time.endDatetime,
            totalRent: price.rentPrice,
            deposit: price.deposit,
            discount: price.discount,
            renter: customer.id,
            author: name,
            comment,
          },
        }
      );
    }
    return carReservation;
  },
});
