const { getSubdomainFromRequest } = require("../functions/get-subdomain");

async function getLoggedUserUserGroup(strapi, name) {
  return await strapi.query("plugin::multi-tenant.user-group").findOne({
    where: {
      name: { $eq: name },
    },
  });
}

async function getLoggedUserUserGroupWithId(strapi, id) {
  return await strapi.query("plugin::multi-tenant.user-group").findOne({
    where: {
      users: {
        id: { $in: id },
      },
    },
  });
}

async function getUserGroupId(strapi, ctxRequest) {
  const subdomain = getSubdomainFromRequest(ctxRequest);
  const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);
  return loggedUserUserGroup.id;
}

module.exports = {
  getLoggedUserUserGroup,
  getLoggedUserUserGroupWithId,
  getUserGroupId,
};
