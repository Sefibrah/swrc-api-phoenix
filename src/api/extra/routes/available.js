module.exports = {
  routes: [
    {
      method: "GET",
      path: "/extras/available",
      handler: "extra.available",
      config: {
        auth: false
      },
    },
    {
      method: "GET",
      path: "/extras/available/:id",
      handler: "extra.isAvailable",
      config: {
        auth: false
      },
    },
  ],
};
