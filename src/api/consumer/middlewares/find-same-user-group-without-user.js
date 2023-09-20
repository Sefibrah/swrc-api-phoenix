const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = getSubdomainFromRequest(ctx.request);
    console.log(subdomain);
    if (subdomain != null) {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      ctx.query = {
        ...ctx.query,
        filters: {
          ...ctx.query.filters,
          ...(config.attribute
            ? {
                [config.attribute]: {
                  userGroup: { id: loggedUserUserGroup.id },
                },
              }
            : { userGroup: { id: loggedUserUserGroup.id } }),
        },
      };

      await next();
    }
  };
};
