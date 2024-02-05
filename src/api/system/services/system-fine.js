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
  createCarContractFine: async (contractId, fine, userGroup) => {
    try {
      const newFine = await strapi.entityService.create("api::fine.fine", {
        data: {
          ...fine,
          userGroup,
        },
      });

      const carContractFine = await strapi.entityService.create(
        "api::car-contract-fine.car-contract-fine",
        {
          data: {
            fine: newFine.id,
            carContract: contractId,
            userGroup,
          },
        }
      );

      return getIdAndAttributes(carContractFine);
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
  updateCarContractFine: async (id, contractId, fineBody, userGroup) => {
    try {
      let carContractFine = await strapi.entityService.findOne(
        "api::car-contract-fine.car-contract-fine",
        id,
        { populate: { fine: { fields: ["id"] } } }
      );

      console.log("carContractFine", carContractFine);

      console.log("fineBody", fineBody);

      await strapi.entityService.update(
        "api::fine.fine",
        carContractFine.fine.id,
        {
          data: {
            ...fineBody,
          },
        }
      );

      carContractFine = await strapi.entityService.update(
        "api::car-contract-fine.car-contract-fine",
        id,
        {
          data: {
            fine: carContractFine.fine.id,
            carContract: contractId,
          },
        }
      );

      return getIdAndAttributes(carContractFine);
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
  deleteCarContractFine: async (id, userGroup) => {
    try {
      const carContractFine = await strapi.entityService.findOne(
        "api::car-contract-fine.car-contract-fine",
        id,
        { populate: { fine: { fields: ["id"] } } }
      );

      if (carContractFine?.fine?.id != null) {
        await strapi.entityService.delete(
          "api::fine.fine",
          carContractFine?.fine?.id
        );
      }

      await strapi.entityService.delete(
        "api::car-contract-fine.car-contract-fine",
        id
      );

      return getIdAndAttributes(carContractFine);
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
};
