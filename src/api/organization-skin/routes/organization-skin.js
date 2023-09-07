"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/functions/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::organization-skin.organization-skin"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::organization-skin.organization-skin",
  routeConfig
);
