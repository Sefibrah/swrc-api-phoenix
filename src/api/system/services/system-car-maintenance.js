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
  createCarMaintenance: async (body, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const userGroup = loggedUserUserGroup.id;
      const newAgreementDetail = await strapi.entityService.create(
        "api::agreement-detail.agreement-detail",
        {
          data: {
            ...body.agreementDetail,
            userGroup,
          },
        }
      );
      const newTransaction = await strapi.entityService.create(
        "api::transaction.transaction",
        {
          data: {
            ...body.transaction,
            userGroup,
          },
        }
      );

      const carMaintenance = await strapi.entityService.create(
        "api::car-contract-fine.car-contract-fine",
        {
          data: {
            ...body,
            agreementDetail: newAgreementDetail.id,
            transaction: newTransaction.id,
            car: body.car,
            userGroup,
          },
        }
      );

      return getIdAndAttributes(carMaintenance);
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
  updateCarMaintenance: async (id, body, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let carMaintenance = await strapi.entityService.findOne(
        "api::car-maintenance.car-maintenance",
        id,
        {
          populate: {
            transaction: { fields: ["id"] },
            agreementDetail: { fields: ["id"] },
          },
        }
      );

      console.log("carMaintenance", carMaintenance);

      await strapi.entityService.update(
        "api::transaction.transaction",
        carMaintenance.transaction.id,
        {
          data: {
            ...body.transaction,
          },
        }
      );

      await strapi.entityService.update(
        "api::agreement-detail.agreement-detail",
        carMaintenance.agreementDetail.id,
        {
          data: {
            ...body.agreementDetail,
          },
        }
      );

      carMaintenance = await strapi.entityService.update(
        "api::car-maintenance.car-maintenance",
        id,
        {
          data: {
            location: body.location,
            typeOfService: body.typeOfService,
            car: body.car,
          },
        }
      );

      return getIdAndAttributes(carMaintenance);
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
  deleteCarMaintenance: async (id, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const carMaintenance = await strapi.entityService.findOne(
        "api::car-maintenance.car-maintenance",
        id,
        {
          populate: {
            transaction: { fields: ["id"] },
            agreementDetail: { fields: ["id"] },
          },
        }
      );

      await strapi.entityService.delete(
        "api::transaction.transaction",
        carMaintenance.transaction.id
      );

      await strapi.entityService.delete(
        "api::agreement-detail.agreement-detail",
        carMaintenance.agreementDetail.id
      );

      await strapi.entityService.delete(
        "api::car-maintenance.car-maintenance",
        id
      );

      return getIdAndAttributes(carMaintenance);
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
