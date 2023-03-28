const jwt_decode = require("jwt-decode");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (
      ctx.request.method === "POST" &&
      ctx.request.header?.authorization != null &&
      ctx.request.url.includes("/api/users")
    ) {
      const jwt = ctx.request.header.authorization.replace("Bearer ", "");
      const decoded = jwt_decode(jwt);
      const userId = decoded?.id;

      if (userId != null) {
        const loggedUserUserGroup = await strapi
          .query("plugin::multi-tenant.user-group")
          .findOne({
            where: {
              users: {
                id: { $in: userId },
              },
            },
          });

        if (!loggedUserUserGroup) {
          return ctx.badRequest("User does not belong to a user group");
        }

        ctx.request.body = {
          ...ctx.request.body,
          userGroup: loggedUserUserGroup.id,
        };
      }
    }

    return await next();
  };
};
