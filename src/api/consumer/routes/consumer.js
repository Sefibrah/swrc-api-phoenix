module.exports = {
  routes: [
    {
      method: "POST",
      path: "/consumer/cars/reservations/:id",
      handler: "consumer.createReservationFromCar",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/consumer/cars/reservations/:id",
      handler: "consumer.getCarReservationById",
      config: {
        auth: false,
      },
    },
    // {
    //   method: "GET",
    //   path: "/consumer/cars/reservations/:code",
    //   handler: "consumer.getCarReservationByCode",
    //   config: {
    //     auth: false,
    //   },
    // },
    {
      method: "GET",
      path: "/consumer/cars/offers",
      handler: "consumer.getCarOffers",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/consumer/cars/offers/:id",
      handler: "consumer.getCarOffer",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/consumer/cars/grouped/reservations/:id",
      handler: "consumer.createReservationFromGroupedCar",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/consumer/cars/grouped/reservations/:code",
      handler: "consumer.getCarGroupReservationByCode",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/consumer/cars/grouped/offers",
      handler: "consumer.getCarGroupedOffers",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/consumer/cars/grouped/offers/:id",
      handler: "consumer.getCarGroupedOffer",
      config: {
        auth: false,
      },
    },
  ],
};
