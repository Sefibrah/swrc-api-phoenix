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
  createRecurringDiscount: async (data, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const discount = await strapi.entityService.create(
        "api::discount.discount",
        {
          data: {
            ...data.discount,
            userGroup: loggedUserUserGroup.id,
          },
        }
      );

      const recurringDiscount = await strapi.entityService.create(
        "api::recurring-discount.recurring-discount",
        {
          data: {
            ...data.recurringDiscount,
            discount: discount.id,
            userGroup: loggedUserUserGroup.id,
          },
        }
      );

      return getIdAndAttributes(recurringDiscount);
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
  updateRecurringDiscount: async (id, data, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let recurringDiscount = await getRecurringDiscount(strapi, id);

      await strapi.entityService.update(
        "api::discount.discount",
        recurringDiscount.discount.id,
        {
          data: {
            ...data.discount,
          },
        }
      );

      recurringDiscount = await strapi.entityService.update(
        "api::recurring-discount.recurring-discount",
        id,
        {
          data: {
            ...data.recurringDiscount,
          },
        }
      );

      return getIdAndAttributes(await getRecurringDiscount(strapi, id));
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
  deleteRecurringDiscount: async (id, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const recurringDiscount = await getRecurringDiscount(strapi, id);

      console.log("id", id);
      console.log("recurringDiscount", recurringDiscount);

      if (recurringDiscount?.discount?.id != null) {
        await strapi.entityService.delete(
          "api::discount.discount",
          recurringDiscount?.discount?.id
        );
      }

      await strapi.entityService.delete(
        "api::recurring-discount.recurring-discount",
        id
      );

      return getIdAndAttributes(recurringDiscount);
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

async function getRecurringDiscount(strapi, id) {
  return await strapi.entityService.findOne(
    "api::recurring-discount.recurring-discount",
    id,
    {
      populate: {
        discount: { fields: ["id"] },
      },
    }
  );
}
