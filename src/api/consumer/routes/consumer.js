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
  ],
};
