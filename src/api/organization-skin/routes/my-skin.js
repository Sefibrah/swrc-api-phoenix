module.exports = {
  routes: [
    {
      method: "GET",
      path: "/organization-skin/my-skin",
      handler: "organization-skin.mySkin",
      config: {
        auth: false
      },
    },
  ],
};
