const jwt_decode = require("jwt-decode");
const {
  getLoggedUserUserGroupWithId,
} = require("../shared/get-logged-user-user-group");

module.exports = () => {
  return async (ctx, next) => {
    if (
      ctx.request.method === "GET" &&
      ctx.request.header?.authorization != null &&
      ctx.request.url.includes("/api/users") &&
      !ctx.request.url.includes("/api/users-permissions")
    ) {
      const jwt = ctx.request.header.authorization.replace("Bearer ", "");
      const decoded = jwt_decode(jwt);
      const userId = decoded?.id;
      if (userId != null) {
        const loggedUserUserGroup = await getLoggedUserUserGroupWithId(
          strapi,
          userId
        );
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
