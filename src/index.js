"use strict";
const {
  USER_GROUP_FIELD_EXTENSIONS,
} = require("./shared/constants/user-group-extensions");
const {
  generateAndAssignAllRolePermissions,
} = require("./shared/functions/generate-and-assign-all-role-permissions");

// create dashboard strapi user
// https://market.strapi.io/plugins/strapi-plugin-init-admin-user

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    strapi.contentType("plugin::users-permissions.user").attributes = {
      ...strapi.contentType("plugin::users-permissions.user").attributes,
      username: {
        type: "string",
        minLength: 3,
        unique: false,
        configurable: false,
        required: true,
      },
      email: {
        type: "string",
        unique: false,
        configurable: false,
        required: true,
      },
      userGroup: {
        type: "relation",
        relation: "manyToOne",
        target: "plugin::multi-tenant.user-group",
        inversedBy: "users",
      },
    };
    strapi.contentType("plugin::multi-tenant.user-group").attributes = {
      ...strapi.contentType("plugin::multi-tenant.user-group").attributes,
      ...USER_GROUP_FIELD_EXTENSIONS,
    };
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    await generateAndAssignAllRolePermissions();
  },
};
