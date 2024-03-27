module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cars/singles/available",
      handler: "car.available",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/cars/singles/available/:id",
      handler: "car.isAvailable",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/cars/singles/relevant-events",
      handler: "car.relevantEventsList",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/cars/singles/relevant-events/:id",
      handler: "car.relevantEventsListById",
      config: {
        auth: false,
      },
    },
  ],
};
