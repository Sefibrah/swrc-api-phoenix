function getSameUserGroupPolicyConfig(contentType, withoutUser = true) {
  return {
    name: withoutUser
      ? "api::consumer.is-same-user-group-without-user"
      : "plugin::multi-tenant.is-same-user-group",
    config: {
      contentType,
    },
  };
}

function getRouteConfig(sameUserGroupPolicyConfig, withoutUser = true) {
  return {
    config: {
      update: {
        policies: [sameUserGroupPolicyConfig],
      },
      delete: {
        policies: [sameUserGroupPolicyConfig],
      },
      findOne: {
        policies: [sameUserGroupPolicyConfig],
      },
      find: {
        middlewares: [
          {
            name: withoutUser
              ? "api::consumer.find-same-user-group-without-user"
              : "plugin::multi-tenant.find-same-user-group",
            config: {},
          },
        ],
      },
      create: {
        middlewares: [
          {
            name: withoutUser
              ? "api::consumer.add-same-user-group-without-user"
              : "plugin::multi-tenant.add-same-user-group",
            config: {},
          },
        ],
      },
    },
  };
}

module.exports = {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
};
