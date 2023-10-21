module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/discounts/temporary-discounts",
      handler: "system-temporary-discount.createTemporaryDiscount",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/discounts/temporary-discounts/:id",
      handler: "system-temporary-discount.updateTemporaryDiscount",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/discounts/temporary-discounts/:id",
      handler: "system-temporary-discount.deleteTemporaryDiscount",
      config: {
        auth: false,
      },
    },
  ],
};
