const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const userGroup = await getUserGroupId(strapi, ctx.request);

    if (!userGroup) {
      return ctx.badRequest("User does not belong to a user group");
    }

    if (config.attribute && !ctx.request.body?.data?.[config.attribute]) {
      return ctx.badRequest(`Request body must include ${config.attribute}`);
    }

    if (config.attribute) {
      const relationService = strapi.contentType(config.contentType)
        ?.attributes?.[config.attribute].target;
      const foreignKey = ctx.request.body?.data?.[config.attribute];
      const attributeId = Number.isInteger(foreignKey)
        ? foreignKey
        : foreignKey.id;

      const resourceToLink = await strapi.query(relationService).findOne({
        where: {
          id: attributeId,
        },
        populate: ["userGroup"],
      });

      if (!resourceToLink) {
        return ctx.notFound(
          `Resource "${config.attribute}" with ID ${attributeId} not found`
        );
      }

      if (resourceToLink.userGroup.id !== userGroup) {
        return ctx.forbidden();
      }

      ctx.request.body = {
        ...ctx.request.body,
        data: {
          ...ctx.request.body.data,
          [config.attribute]: resourceToLink,
        },
      };
    } else {
      ctx.request.body = {
        ...ctx.request.body,
        data: {
          ...ctx.request.body.data,
          userGroup,
        },
      };
    }

    return await next();
  };
};
