"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/functions/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig("api::car.car");
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig, true);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::car.car", routeConfig);
