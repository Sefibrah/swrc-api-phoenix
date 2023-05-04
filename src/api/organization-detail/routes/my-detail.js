module.exports = {
  routes: [
    {
      method: "GET",
      path: "/organization-detail/my-detail",
      handler: "organization-detail.myDetail",
      config: {
        auth: false
      },
    },
  ],
};
