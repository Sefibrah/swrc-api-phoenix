"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError, HttpError } =
  utils.errors;
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getIdAndAttributes,
} = require("../../../shared/functions/get-id-and-attributes");
const { hashPassword } = require("../../../shared/functions/hash-password");

/**
 * system service
 */

module.exports = {
  createSystemUser: async (data, userGroup) => {
    try {
      let user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { email: { $eq: data.email } } });
      if (user != null) {
        return new HttpError("USER_EXISTS");
      }

      const individual = await strapi.entityService.create(
        "api::individual.individual",
        {
          data: {
            userGroup,
          },
        }
      );

      const contact = await strapi.entityService.create(
        "api::contact.contact",
        {
          data: {
            email: data.email,
            userGroup,
          },
        }
      );

      const customer = await strapi.entityService.create(
        "api::customer.customer",
        {
          data: {
            name: data.username,
            individual: individual.id,
            contact: contact.id,
            userGroup,
          },
        }
      );

      const userSetting = await strapi.entityService.create(
        "api::user-setting.user-setting",
        {
          data: {
            // fixme: change to be a bit more smart, or myb not?
            language: "ba",
            userGroup,
          },
        }
      );

      user = await strapi.query("plugin::users-permissions.user").create({
        data: {
          ...data,
          confirmed: true,
          provider: "local",
          password: await hashPassword(data.password),
          customer: customer.id,
          userSetting: userSetting.id,
          userGroup,
        },
        populate: {
          role: { fields: ["id", "name", "description"] },
        },
      });

      return getIdAndAttributes(user);
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
  updateSystemUser: async (id, data, userGroup) => {
    try {
      let user = await getSystemUser(strapi, id);
      if (user == null) {
        return new NotFoundError("USER_NOT_FOUND");
      }

      // await strapi.entityService.update(
      //   "api::contact.contact",
      //   user.customer.contact.id,
      //   {
      //     data: {
      //       email: data.email,
      //     },
      //   }
      // );

      await strapi.entityService.update(
        "api::customer.customer",
        user.customer.id,
        {
          data: {
            name: data.username,
          },
        }
      );

      await strapi.entityService.update(
        "plugin::users-permissions.user",
        user.id,
        {
          data: {
            role: data.role,
          },
        }
      );

      return getIdAndAttributes(await getSystemUser(strapi, id));
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
  deleteSystemUser: async (id, userGroup) => {
    try {
      const user = await getSystemUser(strapi, id);
      if (user == null) {
        return new NotFoundError("USER_NOT_FOUND");
      }

      if (user.customer?.individual?.id != null) {
        await strapi.entityService.delete(
          "api::individual.individual",
          user.customer?.individual?.id
        );
      }

      if (user.customer?.contact?.id != null) {
        await strapi.entityService.delete(
          "api::contact.contact",
          user.customer?.contact?.id
        );
      }

      if (user.customer?.id != null) {
        await strapi.entityService.delete(
          "api::customer.customer",
          user.customer?.id
        );
      }

      if (user.userSetting?.id != null) {
        await strapi.entityService.delete(
          "api::user-setting.user-setting",
          user.userSetting?.id
        );
      }

      await strapi.entityService.delete("plugin::users-permissions.user", id);

      return getIdAndAttributes(user);
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

async function getSystemUser(strapi, id) {
  return await strapi.entityService.findOne(
    "plugin::users-permissions.user",
    id,
    {
      populate: {
        customer: {
          fields: ["id"],
          populate: {
            contact: {
              fields: ["id"],
            },
            individual: {
              fields: ["id"],
            },
          },
        },
        role: { fields: ["id", "name", "description"] },
        userSetting: {
          fields: ["id"],
        },
      },
    }
  );
}
