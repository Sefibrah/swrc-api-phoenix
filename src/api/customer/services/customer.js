"use strict";

/**
 * customer service
 */

const { createCoreService } = require("@strapi/strapi").factories;
const {
  transformResponse,
} = require("@strapi/strapi/dist/core-api/controller/transform.js");

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
      populate: {
        fields: ["country", "comment", "isLocal", "type", "name"],
        individual: {
          fields: ["civilNumber", "dateOfBirth"],
          populate: {
            documents: {
              fields: ["number", "type", "expiry", "issuedBy", "unlimited"],
            },
          },
        },
        contact: {
          fields: [
            "email",
            "telephonePrimary",
            "telephoneSecondary",
            "website",
          ],
        },
      },
    });
  },
  createGuestIndividual: async (
    userGroup,
    { email, telephonePrimary, telephoneSecondary, website },
    { civilNumber, dateOfBirth },
    { name, country, comment, isLocal },
    documents
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
    const documentIds = [];
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      const documentFromDb = await strapi.entityService.create(
        "api::document.document",
        {
          data: {
            number: document.number,
            type: document.type,
            issuedBy: document.issuedBy,
            expiry: document.expiry,
            unlimited: document.unlimited,
            userGroup,
          },
        }
      );
      documentIds.push(documentFromDb.id);
    }
    await strapi.entityService.update(
      "api::individual.individual",
      individual.id,
      {
        data: {
          customer: customer.id,
          documents: documentIds,
        },
      }
    );
    await strapi.entityService.create("api::guest.guest", {
      data: {
        customer: customer.id,
        userGroup,
      },
    });
    return await getIndividualById(strapi, individual.id);
  },
  updateGuestIndividual: async (
    userGroup,
    id,
    contact,
    individual,
    customer,
    documents
  ) => {
    const individualFromDb = await getIndividualById(strapi, id);
    const documentIds = [];
    await strapi.entityService.update(
      "api::contact.contact",
      individualFromDb.attributes.customer.attributes.contact.id,
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
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      if (document.id == null) {
        const createdDocument = await strapi.entityService.create(
          "api::document.document",
          {
            data: {
              number: document.number,
              type: document.type,
              issuedBy: document.issuedBy,
              expiry: document.expiry,
              unlimited: document.unlimited,
              userGroup,
            },
          }
        );
        documentIds.push(createdDocument.id);
      }
      if (document.id != null) {
        const updatedDocument = await strapi.entityService.update(
          "api::document.document",
          document.id,
          {
            data: {
              number: document.number,
              type: document.type,
              issuedBy: document.issuedBy,
              expiry: document.expiry,
              unlimited: document.unlimited,
              userGroup,
            },
          }
        );
        documentIds.push(updatedDocument.id);
      }
    }
    const currentlyConnectedDocuments =
      individualFromDb.attributes.documents.map((doc) => doc.id);
    const newDocumentsArangement = documents
      .filter((document) => document.id != null)
      .map((document) => document.id);
    const documentIdsToDelete = currentlyConnectedDocuments
      ?.filter((x) => !newDocumentsArangement?.includes(x))
      ?.concat(
        newDocumentsArangement?.filter(
          (x) => !currentlyConnectedDocuments.includes(x)
        )
      );
    for (let i = 0; i < documentIdsToDelete.length; i++) {
      const documentIdToDelete = documentIdsToDelete[i];
      await strapi.entityService.updated(
        "api::document.document",
        documentIdToDelete
      );
    }
    await strapi.entityService.update("api::individual.individual", id, {
      data: {
        civilNumber: individual.civilNumber,
        dateOfBirth: individual.dateOfBirth,
        documents: documentIds,
        userGroup,
      },
    });
    await strapi.entityService.update(
      "api::customer.customer",
      individualFromDb.attributes.customer.id,
      {
        data: {
          individual: individual.id,
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

    return await getIndividualById(strapi, id);
  },
  deleteGuestIndividual: async (userGroup, id) => {
    const individualFromDb = await getIndividualById(strapi, id);

    await strapi.entityService.delete(
      "api::contact.contact",
      individualFromDb.attributes.customer.attributes.contact.id
    );
    await strapi.entityService.delete(
      "api::individual.individual",
      individualFromDb.id
    );
    await strapi.entityService.delete(
      "api::customer.customer",
      individualFromDb.attributes.customer.id
    );
    for (let i = 0; i < individualFromDb.attributes.documents.length; i++) {
      const document = individualFromDb.attributes.documents[i];
      await strapi.entityService.delete("api::document.document", document.id);
    }
    return individualFromDb;
  },
}));

async function getIndividualById(strapi, id) {
  let individual = transformResponse(
    await strapi.query("api::individual.individual").findOne({
      where: {
        id,
      },
      fields: ["civilNumber", "dateOfBirth"],
      populate: {
        documents: {
          fields: ["number", "type", "expiry", "issuedBy", "unlimited"],
        },
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
  individual.attributes.customer.contact = transformResponse(
    individual.attributes.customer.contact
  ).data;
  individual.attributes.customer = transformResponse(
    individual.attributes.customer
  ).data;
  individual.attributes.documents = transformResponse(
    individual.attributes.documents
  ).data;
  return individual;
}
