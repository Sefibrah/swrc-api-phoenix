module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cars/relevant-events/:id",
      handler: "car.relevantEventsList",
      config: {
        auth: false
      },
    },
  ],
};
