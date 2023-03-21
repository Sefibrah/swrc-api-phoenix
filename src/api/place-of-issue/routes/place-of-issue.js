"use strict";

/**
 * place-of-issue router
 */

const sameUserGroupPolicyConfig = {
  name: "plugin::multi-tenant.is-same-user-group",
  config: {
    contentType: "api::place-of-issue.place-of-issue",
  },
};

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::place-of-issue.place-of-issue", {
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
