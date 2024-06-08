module.exports = {
  routes: [
    {
      method: "GET",
      path: "/booking-confirmation/pdf/:id",
      handler: "pdf.getBookingConfirmationPdf",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
