module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/discounts/recurring",
      handler: "system-recurring-discount.createRecurringDiscount",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/discounts/recurring/:id",
      handler: "system-recurring-discount.updateRecurringDiscount",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/discounts/recurring/:id",
      handler: "system-recurring-discount.deleteRecurringDiscount",
      config: {
        auth: false,
      },
    },
  ],
};
