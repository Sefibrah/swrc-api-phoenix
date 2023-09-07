const jwt_decode = require("jwt-decode");
const {
  getLoggedUserUserGroupWithId,
} = require("../shared/functions/get-logged-user-user-group");

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
        const loggedUserUserGroup = await getLoggedUserUserGroupWithId(
          strapi,
          userId
        );

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
