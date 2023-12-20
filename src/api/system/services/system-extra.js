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
  createExtra: async (data, files, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const extra = await strapi.entityService.create("api::extra.extra", {
        data: { ...data, userGroup: loggedUserUserGroup.id },
        files,
      });

      return getIdAndAttributes(extra);
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
  updateExtra: async (id, data, files, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let extra = await strapi.entityService.findOne("api::extra.extra", id, {
        populate: {
          thumbnail: { fields: ["id", "url"] },
        },
      });

      extra = await strapi.entityService.update("api::extra.extra", id, {
        data: {
          ...data,
        },
        files,
      });

      console.log("updatedExtra", extra);

      return getIdAndAttributes(extra);
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
  deleteExtra: async (id, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      // fixme: maybe add the deletion of images from the server and cloud too?

      await strapi.entityService.delete("api::extra.extra", id);

      return getIdAndAttributes(carGroup);
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
