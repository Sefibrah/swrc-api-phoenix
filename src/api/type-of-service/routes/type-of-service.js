"use strict";

/**
 * type-of-service router
 */

const sameUserGroupPolicyConfig = {
  name: "plugin::multi-tenant.is-same-user-group",
  config: {
    contentType: "api::type-of-service.type-of-service",
  },
};

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::type-of-service.type-of-service", {
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
          name: "plugin::multi-tenant.find-same-user-group",
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
});
