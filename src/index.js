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
const restrictedUserGroup = ["find", "findOne", "update"];
const restrictedUserSetting = ["find", "findOne", "update"];
const myOrganizationSkin = ["mySkin"];
const myOrganizationSkinRestricted = ["mySkin", "update"];
const myOrganizationDetail = ["myDetail"];
const myOrganizationDetailRestricted = ["myDetail", "update"];
const availabilityNoLimits = ["available", "isAvailable"];
const availabilityLimited = ["available"];
const systemReservationsNoLimits = [
  "createFullReservationFromSystem",
  "updateFullReservationFromSystem",
  "deleteFullReservationFromSystem",
];
const systemContractsNoLimits = [
  "createFullContractFromSystem",
  "updateFullContractFromSystem",
  "deleteFullContractFromSystem",
];

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
  let restrictedAvailableEndpointsPermissions = combineActionWithService(
    ["api::car.car", "api::extra.extra"],
    [...availabilityNoLimits, ...restricted]
  );
  let restrictedPermissions = combineActionWithService(
    [
      "api::color.color",
      "api::fuel-type.fuel-type",
      "api::car-group.car-group",
      "api::location.location",
      "api::status.status",
      "api::transmission-type.transmission-type",
      "api::invoice-place-of-issue.invoice-place-of-issue",
      "api::address-of-stay.address-of-stay",
      "api::payment-method.payment-method",
      "api::vehicle-type.vehicle-type",
      "api::discount.discount",
      "api::recurring-discount.recurring-discount",
      "api::temporary-discount.temporary-discount",
      "api::price.price",
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
      "api::payment-method.payment-method",
      "api::transaction.transaction",
      "api::rental-agreement-detail.rental-agreement-detail",
      "api::agreement-detail.agreement-detail",
      "api::rental-extra.rental-extra",
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
  let restrictedUserGroupPermissions = combineActionWithService(
    ["plugin::multi-tenant.user-group"],
    restrictedUserGroup
  );
  let myOrganizationSkinPermissions = combineActionWithService(
    ["api::organization-skin.organization-skin"],
    myOrganizationSkin
  );
  let myOrganizationDetailPermissions = combineActionWithService(
    ["api::organization-detail.organization-detail"],
    myOrganizationDetail
  );
  let restrictedUserSettingPermissions = combineActionWithService(
    ["api::user-setting.user-setting"],
    restrictedUserSetting
  );
  let noRestrictionPermissions = combineActionWithService(
    [
      "api::service-location.service-location",
      "api::type-of-service.type-of-service",
      "api::flight-number.flight-number",
      "api::place-of-issue.place-of-issue",
    ],
    noRestrictions
  );
  let systemReservationPermissions = combineActionWithService(
    ["api::system.system-reservation"],
    systemReservationsNoLimits
  );
  let systemContractPermissions = combineActionWithService(
    ["api::system.system-contract"],
    systemContractsNoLimits
  );
  return [
    ...restrictedUserSettingPermissions,
    ...restrictedAvailableEndpointsPermissions,
    ...restrictedPermissions,
    ...noDeletePermissions,
    ...noRestrictionPermissions,
    ...noRestrictionsAuthPermissions,
    ...restrictedUserPermissions,
    ...noDeleteUploadPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...restrictedUserGroupPermissions,
    ...systemReservationPermissions,
    ...systemContractPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getMechanicPermissions = () => {
  let restrictedAvailableEndpointsPermissions = combineActionWithService(
    ["api::car.car", "api::extra.extra"],
    [...availabilityNoLimits, ...restricted]
  );
  let restrictedPermissions = combineActionWithService(
    [
      "api::color.color",
      "api::contact.contact",
      "api::flight-number.flight-number",
      "api::fuel-type.fuel-type",
      "api::car-group.car-group",
      "api::location.location",
      "api::status.status",
      "api::transmission-type.transmission-type",
      "api::invoice-place-of-issue.invoice-place-of-issue",
      "api::vehicle-type.vehicle-type",
      "api::car-reservation.car-reservation",
      "api::car-contract.car-contract",
      "api::document-connection.document-connection",
      "api::place-of-issue.place-of-issue",
      "api::address-of-stay.address-of-stay",
      "api::discount.discount",
      "api::individual.individual",
      "api::organisation.organisation",
      "api::contact.contact",
      "api::guest.guest",
      "api::customer.customer",
      "api::recurring-discount.recurring-discount",
      "api::temporary-discount.temporary-discount",
      "api::price.price",
      "api::payment-method.payment-method",
      "api::rental-agreement-detail.rental-agreement-detail",
      "api::rental-extra.rental-extra",
    ],
    restricted
  );
  let noDeletePermissions = combineActionWithService(
    [
      "api::car-maintenance.car-maintenance",
      "api::transaction.transaction",
      "api::agreement-detail.agreement-detail",
    ],
    noDelete
  );
  let noRestrictionPermissions = combineActionWithService(
    [
      "api::service-location.service-location",
      "api::type-of-service.type-of-service",
    ],
    noRestrictions
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
  let restrictedUserGroupPermissions = combineActionWithService(
    ["plugin::multi-tenant.user-group"],
    restrictedUserGroup
  );
  let myOrganizationSkinPermissions = combineActionWithService(
    ["api::organization-skin.organization-skin"],
    myOrganizationSkin
  );
  let myOrganizationDetailPermissions = combineActionWithService(
    ["api::organization-detail.organization-detail"],
    myOrganizationDetail
  );
  let restrictedUserSettingPermissions = combineActionWithService(
    ["api::user-setting.user-setting"],
    restrictedUserSetting
  );
  return [
    ...restrictedUserSettingPermissions,
    ...restrictedAvailableEndpointsPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...restrictedPermissions,
    ...noDeletePermissions,
    ...noRestrictionPermissions,
    ...noRestrictionsAuthPermissions,
    ...restrictedUserPermissions,
    ...noDeleteUploadPermissions,
    ...restrictedUserGroupPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getManagerPermissions = () => {
  let noRestrictionsAvailableEndpointsPermissions = combineActionWithService(
    ["api::car.car", "api::extra.extra"],
    [...availabilityNoLimits, ...noRestrictions]
  );
  let noRestrictionPermissions = combineActionWithService(
    [
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
      "api::place-of-issue.place-of-issue",
      "api::address-of-stay.address-of-stay",
      "api::invoice-place-of-issue.invoice-place-of-issue",
      "api::invoice.invoice",
      "api::discount.discount",
      "api::recurring-discount.recurring-discount",
      "api::temporary-discount.temporary-discount",
      "api::price.price",
      "api::payment-method.payment-method",
      "api::transaction.transaction",
      "api::rental-agreement-detail.rental-agreement-detail",
      "api::agreement-detail.agreement-detail",
      "api::car-contract-invoice.car-contract-invoice",
      "api::rental-extra.rental-extra",
      "api::payment-detail.payment-detail",
      "api::address.address",
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
  let restrictedUserGroupPermissions = combineActionWithService(
    ["plugin::multi-tenant.user-group"],
    restrictedUserGroup
  );
  let myOrganizationSkinPermissions = combineActionWithService(
    ["api::organization-skin.organization-skin"],
    myOrganizationSkinRestricted
  );
  let myOrganizationDetailPermissions = combineActionWithService(
    ["api::organization-detail.organization-detail"],
    myOrganizationDetailRestricted
  );
  let restrictedUserSettingPermissions = combineActionWithService(
    ["api::user-setting.user-setting"],
    restrictedUserSetting
  );
  let systemReservationPermissions = combineActionWithService(
    ["api::system.system-reservation"],
    systemReservationsNoLimits
  );
  let systemContractPermissions = combineActionWithService(
    ["api::system.system-contract"],
    systemContractsNoLimits
  );
  return [
    ...restrictedUserSettingPermissions,
    ...noRestrictionsAvailableEndpointsPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...noRestrictionPermissions,
    ...noRestrictionAuthPermissions,
    ...restrictedUserPermissions,
    ...noLimitUploadPermissions,
    ...restrictedUserGroupPermissions,
    ...systemReservationPermissions,
    ...systemContractPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getAdminPermissions = () => {
  let noRestrictionsAvailableEndpointsPermissions = combineActionWithService(
    ["api::car.car", "api::extra.extra"],
    [...availabilityNoLimits, ...noRestrictions]
  );
  let noRestrictionPermissions = combineActionWithService(
    [
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
      "api::place-of-issue.place-of-issue",
      "api::address-of-stay.address-of-stay",
      "api::invoice-place-of-issue.invoice-place-of-issue",
      "api::invoice.invoice",
      "api::discount.discount",
      "api::recurring-discount.recurring-discount",
      "api::temporary-discount.temporary-discount",
      "api::price.price",
      "api::payment-method.payment-method",
      "api::transaction.transaction",
      "api::rental-agreement-detail.rental-agreement-detail",
      "api::agreement-detail.agreement-detail",
      "api::car-contract-invoice.car-contract-invoice",
      "api::rental-extra.rental-extra",
      "api::payment-detail.payment-detail",
      "api::address.address",
      "api::user-setting.user-setting",
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
  let restrictedUserGroupPermissions = combineActionWithService(
    ["plugin::multi-tenant.user-group"],
    restrictedUserGroup
  );
  let myOrganizationSkinPermissions = combineActionWithService(
    ["api::organization-skin.organization-skin"],
    myOrganizationSkinRestricted
  );
  let myOrganizationDetailPermissions = combineActionWithService(
    ["api::organization-detail.organization-detail"],
    myOrganizationDetailRestricted
  );
  let systemReservationPermissions = combineActionWithService(
    ["api::system.system-reservation"],
    systemReservationsNoLimits
  );
  let systemContractPermissions = combineActionWithService(
    ["api::system.system-contract"],
    systemContractsNoLimits
  );
  return [
    ...noRestrictionsAvailableEndpointsPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...noRestrictionPermissions,
    ...noRestrictionAuthPermissions,
    ...noRestrictionRolePermissions,
    ...noRestrictionUserPermissions,
    ...noLimitUploadPermissions,
    ...restrictedUserGroupPermissions,
    ...systemReservationPermissions,
    ...systemContractPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getAuthenticatedPermissions = () => {
  let availableEndpointsPermissions = combineActionWithService(
    ["api::car.car", "api::extra.extra"],
    availabilityLimited
  );
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
  let restrictedUserGroupPermissions = combineActionWithService(
    ["plugin::multi-tenant.user-group"],
    restrictedUserGroup
  );
  let restrictedPermissions = combineActionWithService(
    [
      "api::extra.extra",
      "api::flight-number.flight-number",
      "api::vehicle-type.vehicle-type",
      "api::location.location",
    ],
    restricted
  );
  let myOrganizationSkinPermissions = combineActionWithService(
    ["api::organization-skin.organization-skin"],
    myOrganizationSkin
  );
  let myOrganizationDetailPermissions = combineActionWithService(
    ["api::organization-detail.organization-detail"],
    myOrganizationDetail
  );
  let restrictedUserSettingPermissions = combineActionWithService(
    ["api::user-setting.user-setting"],
    restrictedUserSetting
  );
  return [
    ...restrictedUserSettingPermissions,
    ...availableEndpointsPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...noRestrictionAuthPermissions,
    ...restrictedUserPermissions,
    ...noDeleteUploadPermissions,
    ...restrictedUserGroupPermissions,
    ...restrictedPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getPublicPermissions = () => {
  let availableEndpointsPermissions = combineActionWithService(
    ["api::car.car", "api::extra.extra"],
    availabilityLimited
  );
  let restrictedAuthPermissions = combineActionWithService(
    ["plugin::users-permissions.auth"],
    noRestrictionsAuth
  );
  let restrictedUserPermissions = combineActionWithService(
    ["plugin::users-permissions.user"],
    restrictedUser
  );
  let restrictedUserGroupPermissions = combineActionWithService(
    ["plugin::multi-tenant.user-group"],
    restrictedUserGroup
  );
  let restrictedPermissions = combineActionWithService(
    [
      "api::flight-number.flight-number",
      "api::vehicle-type.vehicle-type",
      "api::location.location",
    ],
    restricted
  );
  let myOrganizationSkinPermissions = combineActionWithService(
    ["api::organization-skin.organization-skin"],
    myOrganizationSkin
  );
  let myOrganizationDetailPermissions = combineActionWithService(
    ["api::organization-detail.organization-detail"],
    myOrganizationDetail
  );
  let importPermissions = combineActionWithService(
    ["api::import.import"],
    ["importReservationFromGTRC", "importContractFromGTRC"]
  );
  return [
    ...restrictedPermissions,
    ...availableEndpointsPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...restrictedAuthPermissions,
    ...restrictedUserPermissions,
    ...restrictedUserGroupPermissions,
    ...importPermissions,
    ...getCustomEndpointPermissions(),
  ];
};

const getCustomEndpointPermissions = () => {
  let createReservationPermissions = combineActionWithService(
    ["api::consumer.consumer"],
    ["createReservation"]
  );
  return [...createReservationPermissions];
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
  register({ strapi }) {
    strapi.contentType("plugin::users-permissions.user").attributes = {
      ...strapi.contentType("plugin::users-permissions.user").attributes,
      username: {
        type: "string",
        minLength: 3,
        unique: false,
        configurable: false,
        required: true,
      },
      email: {
        type: "string",
        unique: false,
        configurable: false,
        required: true,
      },
      userGroup: {
        type: "relation",
        relation: "manyToOne",
        target: "plugin::multi-tenant.user-group",
        inversedBy: "users",
      },
    };
    strapi.contentType("plugin::multi-tenant.user-group").attributes = {
      ...strapi.contentType("plugin::multi-tenant.user-group").attributes,
      cars: {
        type: "relation",
        relation: "oneToMany",
        target: "api::car.car",
        mappedBy: "userGroup",
      },
      carContracts: {
        type: "relation",
        relation: "oneToMany",
        target: "api::car-contract.car-contract",
        mappedBy: "userGroup",
      },
      carGroups: {
        type: "relation",
        relation: "oneToMany",
        target: "api::car-group.car-group",
        mappedBy: "userGroup",
      },
      carMaintenances: {
        type: "relation",
        relation: "oneToMany",
        target: "api::car-maintenance.car-maintenance",
        mappedBy: "userGroup",
      },
      carReservations: {
        type: "relation",
        relation: "oneToMany",
        target: "api::car-reservation.car-reservation",
        mappedBy: "userGroup",
      },
      colors: {
        type: "relation",
        relation: "oneToMany",
        target: "api::color.color",
        mappedBy: "userGroup",
      },
      contacts: {
        type: "relation",
        relation: "oneToMany",
        target: "api::contact.contact",
        mappedBy: "userGroup",
      },
      customers: {
        type: "relation",
        relation: "oneToMany",
        target: "api::customer.customer",
        mappedBy: "userGroup",
      },
      documents: {
        type: "relation",
        relation: "oneToMany",
        target: "api::document.document",
        mappedBy: "userGroup",
      },
      documentConnections: {
        type: "relation",
        relation: "oneToMany",
        target: "api::document-connection.document-connection",
        mappedBy: "userGroup",
      },
      flightNumbers: {
        type: "relation",
        relation: "oneToMany",
        target: "api::flight-number.flight-number",
        mappedBy: "userGroup",
      },
      fuelTypes: {
        type: "relation",
        relation: "oneToMany",
        target: "api::fuel-type.fuel-type",
        mappedBy: "userGroup",
      },
      guests: {
        type: "relation",
        relation: "oneToMany",
        target: "api::guest.guest",
        mappedBy: "userGroup",
      },
      individuals: {
        type: "relation",
        relation: "oneToMany",
        target: "api::individual.individual",
        mappedBy: "userGroup",
      },
      invoices: {
        type: "relation",
        relation: "oneToMany",
        target: "api::invoice.invoice",
        mappedBy: "userGroup",
      },
      invoicePlaceOfIssues: {
        type: "relation",
        relation: "oneToMany",
        target: "api::invoice-place-of-issue.invoice-place-of-issue",
        mappedBy: "userGroup",
      },
      locations: {
        type: "relation",
        relation: "oneToMany",
        target: "api::location.location",
        mappedBy: "userGroup",
      },
      organisations: {
        type: "relation",
        relation: "oneToMany",
        target: "api::organisation.organisation",
        mappedBy: "userGroup",
      },
      placeOfIssues: {
        type: "relation",
        relation: "oneToMany",
        target: "api::place-of-issue.place-of-issue",
        mappedBy: "userGroup",
      },
      serviceLocations: {
        type: "relation",
        relation: "oneToMany",
        target: "api::service-location.service-location",
        mappedBy: "userGroup",
      },
      statuses: {
        type: "relation",
        relation: "oneToMany",
        target: "api::status.status",
        mappedBy: "userGroup",
      },
      transmissionTypes: {
        type: "relation",
        relation: "oneToMany",
        target: "api::transmission-type.transmission-type",
        mappedBy: "userGroup",
      },
      typeOfServices: {
        type: "relation",
        relation: "oneToMany",
        target: "api::type-of-service.type-of-service",
        mappedBy: "userGroup",
      },
      vehicleTypes: {
        type: "relation",
        relation: "oneToMany",
        target: "api::vehicle-type.vehicle-type",
        mappedBy: "userGroup",
      },
      users: {
        type: "relation",
        relation: "oneToMany",
        target: "plugin::users-permissions.user",
        mappedBy: "userGroup",
      },
      prices: {
        type: "relation",
        relation: "oneToMany",
        target: "api::price.price",
        mappedBy: "userGroup",
      },
      discounts: {
        type: "relation",
        relation: "oneToMany",
        target: "api::discount.discount",
        mappedBy: "userGroup",
      },
      recurringDiscounts: {
        type: "relation",
        relation: "oneToMany",
        target: "api::recurring-discount.recurring-discount",
        mappedBy: "userGroup",
      },
      temporaryDiscounts: {
        type: "relation",
        relation: "oneToMany",
        target: "api::temporary-discount.temporary-discount",
        mappedBy: "userGroup",
      },
      extras: {
        type: "relation",
        relation: "oneToMany",
        target: "api::extra.extra",
        mappedBy: "userGroup",
      },
      paymentMethods: {
        type: "relation",
        relation: "oneToMany",
        target: "api::payment-method.payment-method",
        mappedBy: "userGroup",
      },
      transactions: {
        type: "relation",
        relation: "oneToMany",
        target: "api::transaction.transaction",
        mappedBy: "userGroup",
      },
      rentalAgreementDetails: {
        type: "relation",
        relation: "oneToMany",
        target: "api::rental-agreement-detail.rental-agreement-detail",
        mappedBy: "userGroup",
      },
      agreementDetails: {
        type: "relation",
        relation: "oneToMany",
        target: "api::agreement-detail.agreement-detail",
        mappedBy: "userGroup",
      },
      rentalExtras: {
        type: "relation",
        relation: "oneToMany",
        target: "api::rental-extra.rental-extra",
        mappedBy: "userGroup",
      },
      organizationSkins: {
        type: "relation",
        relation: "oneToMany",
        target: "api::organization-skin.organization-skin",
        mappedBy: "userGroup",
      },
      organizationDetails: {
        type: "relation",
        relation: "oneToMany",
        target: "api::organization-detail.organization-detail",
        mappedBy: "userGroup",
      },
      paymentDetails: {
        type: "relation",
        relation: "oneToMany",
        target: "api::payment-detail.payment-detail",
        mappedBy: "userGroup",
      },
      addresses: {
        type: "relation",
        relation: "oneToMany",
        target: "api::address.address",
        mappedBy: "userGroup",
      },
      userSettings: {
        type: "relation",
        relation: "oneToMany",
        target: "api::user-setting.user-setting",
        mappedBy: "userGroup",
      },
      organizationEmailConfigs: {
        type: "relation",
        relation: "oneToMany",
        target: "api::organization-email-config.organization-email-config",
        mappedBy: "userGroup",
      },
      addressOfStays: {
        type: "relation",
        relation: "oneToMany",
        target: "api::payment-method.payment-method",
        mappedBy: "userGroup",
      },
    };
  },

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
  },
};
