module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-contract-fines",
      handler: "system-fine.createCarContractFine",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/car-contract-fines/:id",
      handler: "system-fine.updateCarContractFine",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/car-contract-fines/:id",
      handler: "system-fine.deleteCarContractFine",
      config: {
        auth: false,
      },
    },
  ],
};
