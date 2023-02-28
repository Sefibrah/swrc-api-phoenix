module.exports = {
  routes: [
    {
      method: "POST",
      path: "/create-reservation",
      handler: "create-reservation.createReservation",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
