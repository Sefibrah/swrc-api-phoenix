const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const userGroup = await getUserGroupId(strapi, ctx.request);

    if (userGroup == null) return;

    ctx.query = {
      ...ctx.query,
      filters: {
        ...ctx.query.filters,
        ...(config.attribute
          ? {
              [config.attribute]: {
                userGroup: { id: userGroup },
              },
            }
          : { userGroup: { id: userGroup } }),
      },
    };

    await next();
  };
};
