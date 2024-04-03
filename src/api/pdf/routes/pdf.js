module.exports = {
  routes: [
    {
      method: "GET",
      path: "/booking-confirmation/pdf/:code",
      handler: "pdf.getBookingConfirmationPdf",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
