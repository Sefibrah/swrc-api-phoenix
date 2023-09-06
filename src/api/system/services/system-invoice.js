"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const { getIdAndAttributes } = require("../../../shared/get-id-and-attributes");

/**
 * system service
 */

module.exports = {
  createInvoiceFromContract: async (contractId, invoice, subdomain) => {
    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });

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
    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });

    const latest = await strapi
      .query("api::car-contract-invoice.car-contract-invoice")
      .findMany({
        where: {
          userGroup: loggedUserUserGroup.id,
        },
        orderBy: { id: "desc" },
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
