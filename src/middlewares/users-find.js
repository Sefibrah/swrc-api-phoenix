const jwt_decode = require("jwt-decode");

module.exports = () => {
  return async (ctx, next) => {
    if (
      ctx.request.method === "GET" &&
      ctx.request.header?.authorization != null &&
      ctx.request.url === "/api/users"
    ) {
      console.log("wtf why is he here", ctx);
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
        if (loggedUserUserGroup != null && ctx.query != null) {
          ctx.query = {
            ...ctx.query,
            filters: {
              ...ctx.query.filters,
              userGroup: { id: loggedUserUserGroup.id },
            },
          };
        }
      }
    }
    return await next();
  };
};
