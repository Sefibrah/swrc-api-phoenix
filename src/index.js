"use strict";
const bcrypt = require("bcryptjs");
const _ = require("lodash");

// create dashboard strapi user
// https://market.strapi.io/plugins/strapi-plugin-init-admin-user

const restricted = ["find", "findOne"];
const noRestrictions = ["find", "findOne", "create", "update", "delete"];
const noDelete = ["find", "findOne", "create", "update"];
const noRestrictionsRole = [
  "find",
  "findOne",
  "createRole",
  "updateRole",
  "deleteRole",
];
const noRestrictionsAuth = [
  "callback",
  "connect",
  "changePassword",
  "emailConfirmation",
  "forgotPassword",
  "resetPassword",
  "register",
  "sendEmailConfirmation",
];
const noRestrictionsUser = [
  "count",
  "create",
  "destroy",
  "find",
  "findOne",
  "me",
  "update",
];
const restrictedUser = ["me"];
const noLimitsUpload = ["destroy", "find", "findOne", "upload"];
const noDeleteUpload = ["find", "findOne", "upload"];

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    if (!password) {
      resolve(null);
    } else {
      bcrypt.hash(`${password}`, 10, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    }
  });
};

const createAdminUser = async (role) => {
  let admin = await strapi
    .query("plugin::users-permissions.user")
    .findOne({ where: { email: { $eq: "admin@strapi.io" } } });
  if (!admin) {
    return await strapi.query("plugin::users-permissions.user").create({
      data: {
        username: "Admin",
        email: "admin@strapi.io",
        confirmed: true,
        provider: "local",
        password: await hashPassword("strapiPassword"),
        role,
      },
    });
  }
  return admin;
};

const createRole = async (type, name, description) => {
  let role = await getRole(type);
  if (!role) {
    return await strapi.query("plugin::users-permissions.role").create({
      data: {
        name,
        description,
        type,
      },
    });
  }
  return role;
};

const getRole = async (type) => {
  return await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { type } });
};

const combineActionWithService = (uids, endpoints) => {
  let array = [];
  uids.forEach((uid) => {
    let arr = endpoints.map((endpoint) => `${uid}.${endpoint}`);
    array = [...array, ...arr];
  });
  return array;
};

const getReceptionistPermissions = () => {
  let restrictedPermissions = combineActionWithService(
    [
      "api::car.car",
      "api::color.color",
      "api::flight-number.flight-number",
      "api::fuel-type.fuel-type",
      "api::car-group.car-group",
      "api::location.location",
      "api::service-location.service-location",
      "api::status.status",
      "api::transmission-type.transmission-type",
      "api::type-of-service.type-of-service",
      "api::vehicle-type.vehicle-type",
    ],
    restricted
  );
  let noDeletePermissions = combineActionWithService(
    [
      "api::car-contract.car-contract",
      "api::car-maintenance.car-maintenance",
      "api::car-reservation.car-reservation",
      "api::customer.customer",
      "api::document.document",
      "api::contact.contact",
      "api::document-connection.document-connection",
      "api::guest.guest",
      "api::individual.individual",
      "api::organisation.organisation",
    ],
    noDelete
  );
  let noRestrictionsAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let noDeleteUploadPermissions = combineActionWithService(
    ["plugin::upload.content-api"],
    noDeleteUpload
  );
  let restrictedUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    restrictedUser
  );
  return [
    ...restrictedPermissions,
    ...noDeletePermissions,
    ...noRestrictionsAuthPermissions,
    ...restrictedUserPermissions,
    ...noDeleteUploadPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getMechanicPermissions = () => {
  let restrictedPermissions = combineActionWithService(
    [
      "api::car.car",
      "api::color.color",
      "api::contact.contact",
      "api::flight-number.flight-number",
      "api::fuel-type.fuel-type",
      "api::car-group.car-group",
      "api::location.location",
      "api::service-location.service-location",
      "api::status.status",
      "api::transmission-type.transmission-type",
      "api::type-of-service.type-of-service",
      "api::vehicle-type.vehicle-type",
      "api::car-reservation.car-reservation",
      "api::car-contract.car-contract",
      "api::document-connection.document-connection",
    ],
    restricted
  );
  let noDeletePermissions = combineActionWithService(
    ["api::car-maintenance.car-maintenance"],
    noDelete
  );
  let noRestrictionsAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let restrictedUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    restrictedUser
  );
  let noDeleteUploadPermissions = combineActionWithService(
    ["plugin::upload.content-api"],
    noDeleteUpload
  );
  return [
    ...restrictedPermissions,
    ...noDeletePermissions,
    ...noRestrictionsAuthPermissions,
    ...restrictedUserPermissions,
    ...noDeleteUploadPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getManagerPermissions = () => {
  let noRestrictionPermissions = combineActionWithService(
    [
      "api::car.car",
      "api::color.color",
      "api::contact.contact",
      "api::car-group.car-group",
      "api::flight-number.flight-number",
      "api::fuel-type.fuel-type",
      "api::location.location",
      "api::service-location.service-location",
      "api::status.status",
      "api::transmission-type.transmission-type",
      "api::type-of-service.type-of-service",
      "api::vehicle-type.vehicle-type",
      "api::car-contract.car-contract",
      "api::car-maintenance.car-maintenance",
      "api::car-reservation.car-reservation",
      "api::customer.customer",
      "api::document.document",
      "api::document-connection.document-connection",
      "api::guest.guest",
      "api::individual.individual",
      "api::organisation.organisation",
    ],
    noRestrictions
  );
  let noRestrictionAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let restrictedUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    restrictedUser
  );
  let noLimitUploadPermissions = combineActionWithService(
    ["plugin::upload.content-api"],
    noLimitsUpload
  );
  return [
    ...noRestrictionPermissions,
    ...noRestrictionAuthPermissions,
    ...restrictedUserPermissions,
    ...noLimitsUpload,
    ...getCustomEndpointPermissions(),
  ];
};

const getAdminPermissions = () => {
  let noRestrictionPermissions = combineActionWithService(
    [
      "api::car.car",
      "api::color.color",
      "api::flight-number.flight-number",
      "api::fuel-type.fuel-type",
      "api::location.location",
      "api::contact.contact",
      "api::service-location.service-location",
      "api::status.status",
      "api::transmission-type.transmission-type",
      "api::type-of-service.type-of-service",
      "api::vehicle-type.vehicle-type",
      "api::car-group.car-group",
      "api::car-contract.car-contract",
      "api::car-maintenance.car-maintenance",
      "api::car-reservation.car-reservation",
      "api::customer.customer",
      "api::document.document",
      "api::document-connection.document-connection",
      "api::guest.guest",
      "api::individual.individual",
      "api::organisation.organisation",
    ],
    noRestrictions
  );
  let noRestrictionAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let noRestrictionRolePermissions = combineActionWithService(
    ["plugin::users-permissions.role"],
    noRestrictionsRole
  );
  let noRestrictionUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    noRestrictionsUser
  );
  let noLimitUploadPermissions = combineActionWithService(
    ["plugin::upload.content-api"],
    noLimitsUpload
  );
  return [
    ...noRestrictionPermissions,
    ...noRestrictionAuthPermissions,
    ...noRestrictionRolePermissions,
    ...noRestrictionUserPermissions,
    ...noLimitUploadPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getAuthenticatedPermissions = () => {
  let noRestrictionAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let restrictedUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    restrictedUser
  );
  let noDeleteUploadPermissions = combineActionWithService(
    ["plugin::upload.content-api"],
    noDeleteUpload
  );
  return [
    ...noRestrictionAuthPermissions,
    ...restrictedUserPermissions,
    ...noDeleteUploadPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getPublicPermissions = () => {
  let restrictedAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let restrictedUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    restrictedUser
  );
  return [
    ...restrictedAuthPermissions,
    ...restrictedUserPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getCustomEndpointPermissions = () => {
  let createReservationPermissions = combineActionWithService(
    ["api::create-reservation.create-reservation"],
    ["createReservation"]
  );
  let availableCarPermissions = combineActionWithService(
    ["api::available-car.available-car"],
    ["availableCar"]
  );
  return [...createReservationPermissions, ...availableCarPermissions];
};

const generatePermission = async (role, action) => {
  return await strapi.query("plugin::users-permissions.permission").create({
    data: {
      action,
      role,
      enabled: true,
    },
  });
};

const generateMultiplePermissionsForRole = async (role, actions) => {
  actions.forEach(async (action, index) => {
    console.log(
      `${index + 1}. from ${
        actions.length
      }. Creating permission for action ${action} for role ID ${role}`
    );
    await generatePermission(role, action);
  });
};

const clearAllPermissions = async () => {
  const permissionsRaw = await strapi
    .query("plugin::users-permissions.permission")
    .findMany();
  const permissions = permissionsRaw.map((permission) => permission.id);
  permissions.forEach(async (permission, index) => {
    console.log(
      `${index + 1}. out of ${
        permissions.length
      }. Deleting active permission of id ${permission}`
    );
    await strapi.query("plugin::users-permissions.permission").delete({
      where: {
        id: { $eq: permission },
      },
    });
  });
};

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    const adminRole = await createRole("admin", "ADMIN", "ADMIN_DESCRIPTION");
    const managerRole = await createRole(
      "manager",
      "MANAGER",
      "MANAGER_DESCRIPTION"
    );
    const receptionistRole = await createRole(
      "receptionist",
      "RECEPTIONIST",
      "RECEPTIONIST_DESCRIPTION"
    );
    const mechanicRole = await createRole(
      "mechanic",
      "MECHANIC",
      "MECHANIC_DESCRIPTION"
    );
    const publicRole = await getRole("public");
    const authenticatedRole = await getRole("authenticated");

    const adminRoleActions = getAdminPermissions();
    const managerRoleActions = getManagerPermissions();
    const receptionistRoleActions = getReceptionistPermissions();
    const mechanicRoleActions = getMechanicPermissions();
    const publicRoleActions = getPublicPermissions();
    const authenticatedRoleActions = getAuthenticatedPermissions();

    await clearAllPermissions();

    await generateMultiplePermissionsForRole(adminRole.id, adminRoleActions);
    await generateMultiplePermissionsForRole(
      managerRole.id,
      managerRoleActions
    );
    await generateMultiplePermissionsForRole(
      receptionistRole.id,
      receptionistRoleActions
    );
    await generateMultiplePermissionsForRole(
      mechanicRole.id,
      mechanicRoleActions
    );
    await generateMultiplePermissionsForRole(publicRole.id, publicRoleActions);
    await generateMultiplePermissionsForRole(
      authenticatedRole.id,
      authenticatedRoleActions
    );
    
    const admin = await createAdminUser(adminRole.id);
    // console.log(admin);
  },
};
