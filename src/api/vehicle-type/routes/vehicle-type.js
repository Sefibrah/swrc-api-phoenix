'use strict';

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::vehicle-type.vehicle-type"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vehicle-type.vehicle-type', routeConfig);
