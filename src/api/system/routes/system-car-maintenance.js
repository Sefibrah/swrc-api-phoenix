module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-maintenances",
      handler: "system-car-maintenance.createCarMaintenance",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/car-maintenances/:id",
      handler: "system-car-maintenance.updateCarMaintenance",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/car-maintenances/:id",
      handler: "system-car-maintenance.deleteCarMaintenance",
      config: {
        auth: false,
      },
    },
  ],
};
