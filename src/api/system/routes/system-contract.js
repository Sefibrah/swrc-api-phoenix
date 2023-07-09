module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-contracts",
      handler: "system-contract.createFullContractFromSystem",
      config: {
        auth: false
      },
    },
    {
      method: "PUT",
      path: "/system/car-contracts/:id",
      handler: "system-contract.updateFullContractFromSystem",
      config: {
        auth: false
      },
    },
    {
      method: "DELETE",
      path: "/system/car-contracts/:id",
      handler: "system-contract.deleteFullContractFromSystem",
      config: {
        auth: false
      },
    },
  ],
};
