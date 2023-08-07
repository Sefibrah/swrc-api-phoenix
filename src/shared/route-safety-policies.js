function getSameUserGroupPolicyConfig(contentType) {
  return {
    name: "plugin::multi-tenant.is-same-user-group",
    config: {
      contentType,
    },
  };
}

function getRouteConfig(sameUserGroupPolicyConfig, withoutUser = false) {
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
            name: "plugin::multi-tenant.add-same-user-group",
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
