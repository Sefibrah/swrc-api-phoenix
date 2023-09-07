"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/functions/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::user-setting.user-setting"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::user-setting.user-setting",
  routeConfig
);
