"use strict";

/**
 * customer service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::customer.customer", ({ strapi }) => ({
  createIndividualGuestCustomer: async (
    userGroup,
    { email, telephonePrimary, telephoneSecondary, website },
    { civilNumber, dateOfBirth, documents },
    { name, country, comment, isLocal }
  ) => {
    const contact = await strapi.entityService.create("api::contact.contact", {
      data: {
        email,
        telephonePrimary,
        telephoneSecondary,
        website,
        userGroup,
      },
    });
    const individual = await strapi.entityService.create(
      "api::individual.individual",
      {
        data: {
          civilNumber,
          dateOfBirth,
          documents,
          userGroup,
        },
      }
    );
    const customer = await strapi.entityService.create(
      "api::customer.customer",
      {
        data: {
          individual: individual.id,
          contact: contact.id,
          name,
          country,
          comment,
          type: "GUEST",
          isLocal,
          userGroup,
        },
      }
    );
    await strapi.query("api::individual.individual").update({
      where: { id: individual.id },
      data: {
        customer: customer.id,
      },
    });
    await strapi.entityService.create("api::guest.guest", {
      data: {
        customer: customer.id,
        userGroup,
      },
    });
    return await strapi.query("api::customer.customer").findOne({
      where: {
        id: customer.id,
      },
    });
  },
}));
