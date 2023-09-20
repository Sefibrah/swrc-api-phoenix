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
      path: "/cars/available/:id",
      handler: "car.isAvailable",
      config: {
        auth: false
      },
    },
  ],
};
