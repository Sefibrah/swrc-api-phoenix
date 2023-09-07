"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/functions/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::document-connection.document-connection"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::document-connection.document-connection",
  routeConfig
);
