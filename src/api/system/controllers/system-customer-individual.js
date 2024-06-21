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
  createGuestIndividual: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const customer = data.customer;
      const individual = data.individual;
      const contact = data.contact;
      const documents = data.documents;

      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-individual")
        .createGuestIndividual(
          contact,
          individual,
          customer,
          documents,
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
  updateGuestIndividual: async (ctx, next) => {
    try {
      const { data } = parseBody(ctx);
      const customer = data.customer;
      const individual = data.individual;
      const contact = data.contact;
      const documents = data.documents;
      const params = ctx.request.params;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-individual")
        .updateGuestIndividual(
          params.id,
          contact,
          individual,
          customer,
          documents,
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
  deleteGuestIndividual: async (ctx, next) => {
    try {
      const individualId = ctx.request.params.id;
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const { id, ...attributes } = await strapi
        .service("api::system.system-customer-individual")
        .deleteGuestIndividual(individualId, userGroup);
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
