"use strict";

const {
  parseBody,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");
const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createGuestOrganisation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const customer = data.customer;
      const organisation = data.organisation;
      const contact = data.contact;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-organisation")
        .createGuestOrganisation(
          loggedUserUserGroup.id,
          contact,
          organisation,
          customer
        );
      if (attributes?.name === "NotFoundError") {
        ctx.send({ ...attributes }, 404);
      } else {
        ctx.send({ data: { id, attributes } }, 201);
      }
      return ctx.body;
    } catch (err) {
      ctx.body = err;
    }
  },
  updateGuestOrganisation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const customer = data.customer;
      const organisation = data.organisation;
      const contact = data.contact;
      const params = ctx.request.params;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-organisation")
        .updateGuestOrganisation(
          loggedUserUserGroup.id,
          params.id,
          contact,
          organisation,
          customer
        );
      if (attributes?.name === "NotFoundError") {
        ctx.send({ ...attributes }, 404);
      } else {
        ctx.send({ data: { id, attributes } }, 201);
      }
      return ctx.body;
    } catch (err) {
      ctx.body = err;
    }
  },
  deleteGuestOrganisation: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const organisationId = ctx.request.params.id;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-organisation")
        .deleteGuestOrganisation(loggedUserUserGroup.id, organisationId);
      if (attributes?.name === "NotFoundError") {
        ctx.send({ ...attributes }, 404);
      } else {
        ctx.send({ data: { id, attributes } }, 201);
      }
      return ctx.body;
    } catch (err) {
      ctx.body = err;
    }
  },
};
