"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::flight-number.flight-number"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig, true);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::flight-number.flight-number",
  routeConfig
);
