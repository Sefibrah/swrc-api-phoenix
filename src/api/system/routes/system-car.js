module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/cars",
      handler: "system-car.createCar",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/cars/:id",
      handler: "system-car.updateCar",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/cars/:id",
      handler: "system-car.deleteCar",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/system/cars/:id/mileage",
      handler: "system-car.setMileageByCarId",
      config: {
        auth: false,
      },
    },
  ],
};
