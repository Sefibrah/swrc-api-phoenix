"use strict";

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
      console.log("im in", ctx.request.body);
      const subdomain = getSubdomainFromRequest(ctx.request);
      const body = ctx.request.body; // customer, individual, contact, documents
      const customer = body.customer;
      const individual = body.individual;
      const contact = body.contact;
      const documents = body.documents;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::customer.customer")
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
      const body = ctx.request.body; // customer, individual, contact, documents
      const customer = body.customer;
      const individual = body.individual;
      const contact = body.contact;
      const documents = body.documents;
      const params = ctx.request.params;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const { id, ...attributes } = await strapi
        .service("api::customer.customer")
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
        .service("api::customer.customer")
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
