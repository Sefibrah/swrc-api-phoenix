module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-reservations",
      handler: "system-car-reservation.createCarReservation",
      config: {
        auth: false
      },
    },
    {
      method: "PUT",
      path: "/system/car-reservations/:id",
      handler: "system-car-reservation.updateCarReservation",
      config: {
        auth: false
      },
    },
    {
      method: "DELETE",
      path: "/system/car-reservations/:id",
      handler: "system-car-reservation.deleteCarReservation",
      config: {
        auth: false
      },
    },
  ],
};
