module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/customers/individuals",
      handler: "system-customer-individual.createGuestIndividual",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/customers/individuals/:id",
      handler: "system-customer-individual.updateGuestIndividual",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/customers/individuals/:id",
      handler: "system-customer-individual.deleteGuestIndividual",
      config: {
        auth: false,
      },
    },
  ],
};
