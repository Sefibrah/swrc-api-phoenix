'use strict';

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::recurring-discount.recurring-discount"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recurring-discount.recurring-discount', routeConfig);
