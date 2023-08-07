'use strict';

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::location.location"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig, true);

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::location.location', routeConfig);
