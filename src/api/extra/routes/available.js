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
      path: "/extra/available/:id",
      handler: "extra.isAvailable",
      config: {
        auth: false
      },
    },
  ],
};
