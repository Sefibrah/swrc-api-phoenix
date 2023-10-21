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
  createCarContractInvoice: async (body, subdomain) => {
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

  updateCarContractInvoice: async (id, body, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let carContractInvoice = await strapi.entityService.findOne(
        "api::car-contract-invoice.car-contract-invoice",
        id,
        {
          populate: {
            invoice: { fields: ["id"] },
          },
        }
      );

      console.log("carContractInvoice", carContractInvoice);

      await strapi.entityService.update(
        "api::invoice.invoice",
        carContractInvoice.invoice.id,
        {
          data: {
            ...body.invoice,
          },
        }
      );

      carContractInvoice = await strapi.entityService.update(
        "api::car-contract-invoice.car-contract-invoice",
        id,
        {
          data: {
            invoice: carContractInvoice.invoice.id,
            carContract: body.carContract,
          },
        }
      );

      return getIdAndAttributes(carContractInvoice);
    } catch (err) {
      if (err.name == "ValidationError") {
        return new ValidationError(err.message, err.details);
      } else if (err.name == "NotFoundError") {
        return new NotFoundError(err.message, err.details);
      } else {
        return new ApplicationError(err.message, err.details);
      }
    }
  },
  deleteCarContractInvoice: async (id, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const carContractInvoice = await strapi.entityService.findOne(
        "api::car-contract-invoice.car-contract-invoice",
        id,
        {
          populate: {
            invoice: { fields: ["id"] },
          },
        }
      );

      await strapi.entityService.delete(
        "api::invoice.invoice",
        carContractInvoice.invoice.id
      );

      await strapi.entityService.delete(
        "api::car-contract-invoice.car-contract-invoice",
        id
      );

      return getIdAndAttributes(carContractInvoice);
    } catch (err) {
      if (err.name == "ValidationError") {
        return new ValidationError(err.message, err.details);
      } else if (err.name == "NotFoundError") {
        return new NotFoundError(err.message, err.details);
      } else {
        return new ApplicationError(err.message, err.details);
      }
    }
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
