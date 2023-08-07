module.exports = {
  routes: [
    {
      method: "POST",
      path: "/consumer/reservation",
      handler: "consumer.createReservation",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/consumer/reservation/:code",
      handler: "consumer.getReservationByCode",
      config: {
        auth: false,
      },
    },
  ],
};
