module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/car-contract-invoices",
      handler: "system-car-contract-invoice.createCarContractInvoice",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/car-contract-invoices/:id",
      handler: "system-car-contract-invoice.updateCarContractInvoice",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/car-contract-invoices/:id",
      handler: "system-car-contract-invoice.deleteCarContractInvoice",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/system/car-contract-invoices/latest",
      handler: "system-car-contract-invoice.getLatestInvoice",
      config: {
        auth: false,
      },
    },
  ],
};
