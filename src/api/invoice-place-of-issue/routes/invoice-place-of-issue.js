"use strict";

const {
  getSameUserGroupPolicyConfig,
  getRouteConfig,
} = require("../../../shared/route-safety-policies");

const sameUserGroupPolicyConfig = getSameUserGroupPolicyConfig(
  "api::invoice-place-of-issue.invoice-place-of-issue"
);
const routeConfig = getRouteConfig(sameUserGroupPolicyConfig);

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::invoice-place-of-issue.invoice-place-of-issue",
  routeConfig
);
