"use strict";

const utils = require("@strapi/utils");
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
  createInvoiceFromContract: async (contractId, invoice, subdomain) => {
    const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);

    const userGroup = loggedUserUserGroup.id;

    const newInvoice = await strapi.entityService.create(
      "api::invoice.invoice",
      {
        data: {
          ...invoice,
          userGroup,
        },
      }
    );

    const carContractInvoice = await strapi.entityService.create(
      "api::car-contract-invoice.car-contract-invoice",
      {
        data: {
          invoice: newInvoice.id,
          carContract: contractId,
          userGroup,
        },
      }
    );

    return getIdAndAttributes(carContractInvoice);
  },

  getLatestInvoice: async (subdomain) => {
    const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);

    const latest = await strapi
      .query("api::car-contract-invoice.car-contract-invoice")
      .findMany({
        where: {
          userGroup: loggedUserUserGroup.id,
        },
        orderBy: { invoice: { fiscalNumber: "desc" } },
        limit: 1,
        populate: {
          select: ["id"],
          carContract: {
            select: ["id"],
          },
          invoice: {
            select: [
              "id",
              "dateOfIssue",
              "placeOfIssue",
              "fiscalNumber",
              "invoiceNumber",
              "dateOfDelivery",
            ],
          },
        },
      });

    return getIdAndAttributes(latest[0]);
  },
};
