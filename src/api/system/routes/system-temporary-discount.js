module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/discounts/temporary",
      handler: "system-temporary-discount.createTemporaryDiscount",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/discounts/temporary/:id",
      handler: "system-temporary-discount.updateTemporaryDiscount",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/discounts/temporary/:id",
      handler: "system-temporary-discount.deleteTemporaryDiscount",
      config: {
        auth: false,
      },
    },
  ],
};
