const { getSubdomainFromRequest } = require("../../../shared/functions/get-subdomain");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = getSubdomainFromRequest(ctx.request);
    console.log(subdomain);
    if (subdomain != null) {
      const loggedUserUserGroup = await strapi
        .query("plugin::multi-tenant.user-group")
        .findOne({
          where: {
            name: { $eq: subdomain },
          },
        });

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
