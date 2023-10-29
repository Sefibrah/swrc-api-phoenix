module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/extras",
      handler: "system-extra.createExtra",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/extras/:id",
      handler: "system-extra.updateExtra",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/extras/:id",
      handler: "system-extra.deleteExtra",
      config: {
        auth: false,
      },
    },
  ],
};
