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
  createGuestIndividual: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const customer = data.customer;
      const individual = data.individual;
      const contact = data.contact;
      const documents = data.documents;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-individual")
        .createGuestIndividual(
          loggedUserUserGroup.id,
          contact,
          individual,
          customer,
          documents
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
  updateGuestIndividual: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const { data } = parseBody(ctx);
      console.log("data", data);
      const body = ctx.request.body;
      console.log("body", body);
      const customer = data.customer;
      const individual = data.individual;
      const contact = data.contact;
      const documents = data.documents;
      const params = ctx.request.params;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-individual")
        .updateGuestIndividual(
          loggedUserUserGroup.id,
          params.id,
          contact,
          individual,
          customer,
          documents
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
  deleteGuestIndividual: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const individualId = ctx.request.params.id;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-individual")
        .deleteGuestIndividual(loggedUserUserGroup.id, individualId);
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
