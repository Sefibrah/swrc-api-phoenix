"use strict";

const utils = require("@strapi/utils");
const {
  transformResponse,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getIdAndAttributes,
} = require("../../../shared/functions/get-id-and-attributes");

/**
 * system service
 */

module.exports = {
  createGuestOrganisation: async (
    userGroup,
    { email, telephonePrimary, telephoneSecondary, website },
    { organisationId },
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
    const organisation = await strapi.entityService.create(
      "api::organisation.organisation",
      {
        data: {
          organisationId,
          userGroup,
        },
      }
    );
    const customer = await strapi.entityService.create(
      "api::customer.customer",
      {
        data: {
          organisation: organisation.id,
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
    await strapi.entityService.update(
      "api::organisation.organisation",
      organisation.id,
      {
        data: {
          customer: customer.id,
          userGroup,
        },
      }
    );
    await strapi.entityService.create("api::guest.guest", {
      data: {
        customer: customer.id,
        userGroup,
      },
    });
    return await getOrganisationById(strapi, organisation.id);
  },
  updateGuestOrganisation: async (
    userGroup,
    id,
    contact,
    organisation,
    customer
  ) => {
    const organisationFromDb = await getOrganisationById(strapi, id);
    await strapi.entityService.update(
      "api::contact.contact",
      organisationFromDb.attributes.customer.attributes.contact.id,
      {
        data: {
          email: contact.email,
          telephonePrimary: contact.telephonePrimary,
          telephoneSecondary: contact.telephoneSecondary,
          website: contact.website,
          userGroup,
        },
      }
    );
    await strapi.entityService.update("api::organisation.organisation", id, {
      data: {
        organisationId: organisation.organisationId,
        userGroup,
      },
    });
    await strapi.entityService.update(
      "api::customer.customer",
      organisationFromDb.attributes.customer.id,
      {
        data: {
          organisation: organisation.id,
          contact: contact.id,
          name: customer.name,
          country: customer.country,
          comment: customer.comment,
          type: "GUEST",
          isLocal: customer.isLocal,
          userGroup,
        },
      }
    );

    return await getOrganisationById(strapi, id);
  },
  deleteGuestOrganisation: async (userGroup, id) => {
    const organisationlFromDb = await getOrganisationById(strapi, id);

    if (
      organisationlFromDb?.attributes?.customer?.attributes?.contact?.id != null
    ) {
      await strapi.entityService.delete(
        "api::contact.contact",
        organisationlFromDb.attributes.customer.attributes.contact.id
      );
    }
    if (organisationlFromDb?.id != null) {
      await strapi.entityService.delete(
        "api::organisation.organisation",
        organisationlFromDb.id
      );
    }
    if (organisationlFromDb?.attributes?.customer?.id != null) {
      await strapi.entityService.delete(
        "api::customer.customer",
        organisationlFromDb.attributes.customer.id
      );
    }
    return organisationlFromDb;
  },
};

async function getOrganisationById(strapi, id) {
  let organisation = transformResponse(
    await strapi.query("api::organisation.organisation").findOne({
      where: {
        id,
      },
      fields: ["organisationId"],
      populate: {
        customer: {
          fields: ["country", "comment", "isLocal", "type", "name"],
          populate: {
            contact: {
              fields: [
                "email",
                "telephonePrimary",
                "telephoneSecondary",
                "website",
              ],
            },
          },
        },
      },
    })
  ).data;
  organisation.attributes.customer.contact = transformResponse(
    organisation.attributes.customer.contact
  ).data;
  organisation.attributes.customer = transformResponse(
    organisation.attributes.customer
  ).data;
  return organisation;
}
