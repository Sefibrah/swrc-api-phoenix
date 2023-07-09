module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-reservations",
      handler: "system-reservation.createFullReservationFromSystem",
      config: {
        auth: false
      },
    },
    {
      method: "PUT",
      path: "/system/car-reservations/:id",
      handler: "system-reservation.updateFullReservationFromSystem",
      config: {
        auth: false
      },
    },
    {
      method: "DELETE",
      path: "/system/car-reservations/:id",
      handler: "system-reservation.deleteFullReservationFromSystem",
      config: {
        auth: false
      },
    },
  ],
};
