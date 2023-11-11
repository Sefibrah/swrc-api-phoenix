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
  createTemporaryDiscount: async (data, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      console.log("loggedUserUserGroup", loggedUserUserGroup);

      const discount = await strapi.entityService.create(
        "api::discount.discount",
        {
          data: {
            ...data.discount,
            userGroup: loggedUserUserGroup.id,
          },
        }
      );

      const temporaryDiscount = await strapi.entityService.create(
        "api::temporary-discount.temporary-discount",
        {
          data: {
            ...data.temporaryDiscount,
            discount: discount.id,
            userGroup: loggedUserUserGroup.id,
          },
        }
      );

      return getIdAndAttributes(temporaryDiscount);
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
  updateTemporaryDiscount: async (id, data, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let temporaryDiscount = await getTemporaryDiscount(strapi, id);

      await strapi.entityService.update(
        "api::discount.discount",
        temporaryDiscount.discount.id,
        {
          data: {
            ...data.discount,
          },
        }
      );

      temporaryDiscount = await strapi.entityService.update(
        "api::temporary-discount.temporary-discount",
        id,
        {
          data: {
            ...data.temporaryDiscount,
          },
        }
      );

      return getIdAndAttributes(await getTemporaryDiscount(strapi, id));
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
  deleteTemporaryDiscount: async (id, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const temporaryDiscount = await getTemporaryDiscount(strapi, id);

      if (temporaryDiscount?.discount?.id != null) {
        await strapi.entityService.delete(
          "api::discount.discount",
          temporaryDiscount?.discount?.id
        );
      }

      await strapi.entityService.delete(
        "api::temporary-discount.temporary-discount",
        id
      );

      return getIdAndAttributes(temporaryDiscount);
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

async function getTemporaryDiscount(strapi, id) {
  return await strapi.entityService.findOne(
    "api::temporary-discount.temporary-discount",
    id,
    {
      populate: {
        discount: { fields: ["id"] },
      },
    }
  );
}
