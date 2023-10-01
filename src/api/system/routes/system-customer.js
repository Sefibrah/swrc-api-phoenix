module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/customers/individuals",
      handler: "system-customer.createGuestIndividual",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/customers/individuals/:id",
      handler: "system-customer.updateGuestIndividual",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/customers/individuals/:id",
      handler: "system-customer.deleteGuestIndividual",
      config: {
        auth: false,
      },
    },
  ],
};
