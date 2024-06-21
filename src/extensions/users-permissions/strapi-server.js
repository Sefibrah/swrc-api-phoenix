const jwt_decode = require("jwt-decode");
const _ = require("lodash");
const {
  validateCreateUserBody,
  validateUpdateUserBody,
} = require("../../../node_modules/@strapi/plugin-users-permissions/server/controllers/validation/user");

const utils = require("../../../node_modules/@strapi/utils");
const { getService } = require("../../../node_modules/@strapi/plugin-users-permissions/server/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const {
  getLoggedUserUserGroupWithId,
} = require("../../shared/functions/get-logged-user-user-group");
const {
  getIdAndAttributes,
} = require("../../shared/functions/get-id-and-attributes");

module.exports = (plugin) => {
  const sanitizeOutput = (user) => {
    const {
      password,
      resetPasswordToken,
      confirmationToken,
      ...sanitizedUser
    } = user; // be careful, you need to omit other private attributes yourself
    return sanitizedUser;
  };

  plugin.controllers.user.me = async (ctx) => {
    if (!ctx.state.user) {
      return ctx.unauthorized();
    }
    const user = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      ctx.state.user.id,
      { populate: ["role", "userSetting"] }
    );

    ctx.body = sanitizeOutput(organizeUser(user));
  };

  plugin.controllers.user.findOne = async (ctx) => {
    const { id } = ctx.params;
    const { query } = ctx;

    let data = await getService("user").fetch(id, query);

    if (data) {
      data = await sanitizeOutput(data, ctx);
    }

    ctx.body = organizeUser(data);
  };

  plugin.controllers.user.find = async (ctx) => {
    const users = await strapi.entityService.findMany(
      "plugin::users-permissions.user",
      { ...ctx.params, populate: ["role"], ...ctx.query }
    );

    ctx.body = users.map((user) => sanitizeOutput(organizeUser(user)));
  };

  plugin.controllers.role.find = async (ctx) => {
    const roles = await strapi.entityService.findMany(
      "plugin::users-permissions.role",
      { ...ctx.params, ...ctx.query }
    );

    ctx.body = roles.map((role) => {
      let organizedRole = getIdAndAttributes(role);
      return sanitizeOutput(organizedRole);
    });
  };

  plugin.controllers.user.update = async (ctx) => {
    const token = ctx.request.header.authorization.replace("Bearer ", "");
    const decoded = jwt_decode(token);
    const userId = decoded?.id;

    const advancedConfigs = await strapi
      .store({ type: "plugin", name: "users-permissions", key: "advanced" })
      .get();

    const { id } = ctx.params;
    const { email, username, password } = ctx.request.body;
    const loggedUserUserGroup = await getLoggedUserUserGroupWithId(
      strapi,
      userId
    );

    const user = await getService("user").fetch(id);
    if (!user) {
      throw new NotFoundError(`User not found`);
    }

    await validateUpdateUserBody(ctx.request.body);

    if (
      user.provider === "local" &&
      _.has(ctx.request.body, "password") &&
      !password
    ) {
      throw new ValidationError("password.notNull");
    }

    if (_.has(ctx.request.body, "username")) {
      const userWithSameUsername = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { username, userGroup: loggedUserUserGroup.id } });

      if (
        userWithSameUsername &&
        _.toString(userWithSameUsername.id) !== _.toString(id)
      ) {
        throw new ApplicationError("Username already taken");
      }
    }

    if (_.has(ctx.request.body, "email") && advancedConfigs.unique_email) {
      const userWithSameEmail = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: email.toLowerCase(),
            userGroup: loggedUserUserGroup.id,
          },
        });

      if (
        userWithSameEmail &&
        _.toString(userWithSameEmail.id) !== _.toString(id)
      ) {
        throw new ApplicationError("Email already taken");
      }
      ctx.request.body.email = ctx.request.body.email.toLowerCase();
    }

    const updateData = {
      ...ctx.request.body,
    };

    const data = await getService("user").edit(user.id, updateData);
    const sanitizedData = await sanitizeOutput(organizeUser(data), ctx);

    ctx.send(sanitizedData);
  };

  plugin.controllers.user.create = async (ctx) => {
    const token = ctx.request.header.authorization.replace("Bearer ", "");
    const decoded = jwt_decode(token);
    const userId = decoded?.id;

    const advanced = await strapi
      .store({ type: "plugin", name: "users-permissions", key: "advanced" })
      .get();

    await validateCreateUserBody(ctx.request.body);

    const { email, username, role } = ctx.request.body;
    const loggedUserUserGroup = await getLoggedUserUserGroupWithId(
      strapi,
      userId
    );

    const userWithSameUsername = await strapi
      .query("plugin::users-permissions.user")
      .findOne({
        where: { username, userGroup: loggedUserUserGroup.id },
      });

    if (userWithSameUsername) {
      if (!email) throw new ApplicationError("Username already taken");
    }

    if (advanced.unique_email) {
      const userWithSameEmail = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: email.toLowerCase(),
            userGroup: loggedUserUserGroup.id,
          },
        });

      if (userWithSameEmail) {
        throw new ApplicationError("Email already taken");
      }
    }

    const user = {
      ...ctx.request.body,
      email: email.toLowerCase(),
      provider: "local",
    };

    if (!role) {
      const defaultRole = await strapi
        .query("plugin::users-permissions.role")
        .findOne({ where: { type: advanced.default_role } });

      user.role = defaultRole.id;
    }

    try {
      const data = await getService("user").add(user);
      const sanitizedData = await sanitizeOutput(organizeUser(data), ctx);

      ctx.created(sanitizedData);
    } catch (error) {
      throw new ApplicationError(error.message);
    }
  };

  return plugin;
};

function organizeUser(user) {
  let organizedUser = getIdAndAttributes(user);
  return organizedUser;
}
