"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getIdAndAttributes,
} = require("../../../shared/functions/get-id-and-attributes");

/**
 * system service
 */

module.exports = {
  createCarContractInvoice: async (body, userGroup) => {
    const newInvoice = await strapi.entityService.create(
      "api::invoice.invoice",
      {
        data: {
          ...body.invoice,
          userGroup,
        },
      }
    );

    const carContractInvoice = await strapi.entityService.create(
      "api::car-contract-invoice.car-contract-invoice",
      {
        data: {
          invoice: newInvoice.id,
          carContract: body.carContract,
          userGroup,
        },
      }
    );

    return getIdAndAttributes(carContractInvoice);
  },
  updateCarContractInvoice: async (id, body, userGroup) => {
    try {
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
  deleteCarContractInvoice: async (id, userGroup) => {
    try {
      const carContractInvoice = await strapi.entityService.findOne(
        "api::car-contract-invoice.car-contract-invoice",
        id,
        {
          populate: {
            invoice: { fields: ["id"] },
          },
        }
      );

      if (carContractInvoice?.invoice?.id != null) {
        await strapi.entityService.delete(
          "api::invoice.invoice",
          carContractInvoice.invoice.id
        );
      }

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
  getLatestInvoice: async (userGroup) => {
    const latest = await strapi
      .query("api::car-contract-invoice.car-contract-invoice")
      .findMany({
        where: {
          userGroup,
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
