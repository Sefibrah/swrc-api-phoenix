"use strict";

/**
 * document service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::document.document", ({ strapi }) => ({
  createPassport: async (userGroup, { number, issuedBy, expiry }) => {
    return await createDocument(
      strapi,
      userGroup,
      { number, issuedBy, expiry },
      "PASSPORT"
    );
  },
  createDrivingsLicense: async (userGroup, { number, issuedBy, expiry }) => {
    return await createDocument(
      strapi,
      userGroup,
      { number, issuedBy, expiry },
      "DRIVING"
    );
  },
  createIdentityLicense: async (userGroup, { number, issuedBy, expiry }) => {
    return await createDocument(
      strapi,
      userGroup,
      { number, issuedBy, expiry },
      "IDENTITY"
    );
  },
}));

async function createDocument(
  strapi,
  userGroup,
  { number, issuedBy, expiry },
  type
) {
  return strapi.entityService.create("api::document.document", {
    data: {
      number,
      issuedBy,
      expiry,
      type,
      userGroup,
    },
  });
}
