module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/customers/organisations",
      handler: "system-customer-organisation.createGuestOrganisation",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/customers/organisations/:id",
      handler: "system-customer-organisation.updateGuestOrganisation",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/customers/organisations/:id",
      handler: "system-customer-organisation.deleteGuestOrganisation",
      config: {
        auth: false,
      },
    },
  ],
};
