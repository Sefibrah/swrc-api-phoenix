module.exports = {
  routes: [
    {
      method: "POST",
      path: "/system/user",
      handler: "system-user.createSystemUser",
      config: {
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/system/user/:id",
      handler: "system-user.updateSystemUser",
      config: {
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/system/user/:id",
      handler: "system-user.deleteSystemUser",
      config: {
        auth: false,
      },
    },
  ],
};
