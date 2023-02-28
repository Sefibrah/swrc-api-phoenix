"use strict";

/**
 * create-reservation service
 */

module.exports = () => ({
  createReservation: async (
    carId,
    time,
    location,
    userInfo,
    flightNumber,
    extras,
    price
  ) => {
    // const name = userInfo.title + " " + userInfo.name;
    // const contact = await strapi.entityService.create("api::contact.contact", {
    //   data: {
    //     email: userInfo.email,
    //     telephone_international: userInfo.telephone,
    //   },
    // });
    // const individualCustomer = await strapi.entityService.create(
    //   "api::individual-customer.individual-customer",
    //   {
    //     data: {
    //       name,
    //       contact: contact.id,
    //     },
    //   }
    // );
    // const customerBundle = await strapi.entityService.create(
    //   "api::customer-bundle.customer-bundle",
    //   {
    //     data: {
    //       individual: individualCustomer.id,
    //     },
    //   }
    // );
    // const comment = extras
    //   .map((extra) => extra.amount + " x " + extra.name)
    //   .join(", ");
    // const carReservation = await strapi.entityService.create(
    //   "api::car-reservation.car-reservation",
    //   {
    //     data: {
    //       flight_number: flightNumber,
    //       car: carId,
    //       start_location: location.startLocation,
    //       end_location: location.endLocation,
    //       start_datetime: time.startDatetime,
    //       end_datetime: time.endDatetime,
    //       total_rent: price.rentPrice,
    //       deposit: price.deposit,
    //       discount: price.discount,
    //       primary_driver: customerBundle.id,
    //       renter: customerBundle.id,
    //       author: name,
    //       comment,
    //     },
    //   }
    // );
    // return carReservation;
    return null;
  },
});
