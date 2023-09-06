module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-contract-invoices/from-contract",
      handler: "system-invoice.createInvoiceFromContract",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/system/car-contract-invoices/latest",
      handler: "system-invoice.getLatestInvoice",
      config: {
        auth: false,
      },
    },
  ],
};
