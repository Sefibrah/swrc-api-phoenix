"use strict";

/**
 * organization-detail router
 */

const sameUserGroupPolicyConfig = {
  name: "plugin::multi-tenant.is-same-user-group",
  config: {
    contentType: "api::organization-detail.organization-detail",
  },
};

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::organization-detail.organization-detail",
  {
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
  }
);
