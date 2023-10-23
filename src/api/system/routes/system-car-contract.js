module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-contracts",
      handler: "system-car-contract.createCarContract",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/car-contracts/:id",
      handler: "system-car-contract.updateCarContract",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/car-contracts/:id",
      handler: "system-car-contract.deleteCarContract",
      config: {
        auth: false,
      },
    },
  ],
};
