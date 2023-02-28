module.exports = {
  routes: [
    {
      method: "GET",
      path: "/available-car",
      handler: "available-car.availableCar",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
