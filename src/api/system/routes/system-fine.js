module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-contract-fines/from-contract",
      handler: "system-fine.createFromContract",
      config: {
        auth: false,
      },
    },
  ],
};
