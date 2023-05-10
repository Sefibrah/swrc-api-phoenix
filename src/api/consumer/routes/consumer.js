module.exports = {
  routes: [
    {
      method: "POST",
      path: "/consumer/make-reservation",
      handler: "consumer.makeReservation",
      config: {
        auth: false
      },
    },
  ],
};
