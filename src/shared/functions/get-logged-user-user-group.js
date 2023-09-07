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

module.exports = {
  getLoggedUserUserGroup,
  getLoggedUserUserGroupWithId
};
