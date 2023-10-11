module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-groups",
      handler: "system-car-group.createCarGroup",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/car-groups/:id",
      handler: "system-car-group.updateCarGroup",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/car-groups/:id",
      handler: "system-car-group.deleteCarGroup",
      config: {
        auth: false,
      },
    },
  ],
};
