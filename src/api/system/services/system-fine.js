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
  createFromContract: async (contractId, fine, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const userGroup = loggedUserUserGroup.id;
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
};
