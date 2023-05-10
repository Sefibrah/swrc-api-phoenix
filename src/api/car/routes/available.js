module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cars/available",
      handler: "car.available",
      config: {
        auth: false
      },
    },
    {
      method: "GET",
      path: "/car/available/:id",
      handler: "car.isAvailable",
      config: {
        auth: false
      },
    },
  ],
};
