"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/functions/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::fuel-type.fuel-type"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::fuel-type.fuel-type", routeConfig);
