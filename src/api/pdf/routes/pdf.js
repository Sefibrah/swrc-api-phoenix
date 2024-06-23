module.exports = {
  routes: [
    {
      method: "GET",
      path: "/booking-confirmation/pdf/:idOrCode",
      handler: "pdf.getBookingConfirmationPdf",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
