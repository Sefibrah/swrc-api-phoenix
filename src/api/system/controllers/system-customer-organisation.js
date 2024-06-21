"use strict";

const {
  parseBody,
} = require("../../../../node_modules/@strapi/strapi/dist/core-api/controller/transform.js");
const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createGuestOrganisation: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const customer = data.customer;
      const organisation = data.organisation;
      const contact = data.contact;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-organisation")
        .createGuestOrganisation(
          contact,
          organisation,
          customer,
          userGroup
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
      const { data } = parseBody(ctx);
      const customer = data.customer;
      const organisation = data.organisation;
      const contact = data.contact;
      const params = ctx.request.params;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-organisation")
        .updateGuestOrganisation(
          params.id,
          contact,
          organisation,
          customer,
          userGroup
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
      const organisationId = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-organisation")
        .deleteGuestOrganisation(organisationId, userGroup);
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
