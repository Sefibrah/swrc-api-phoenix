"use strict";
const {
  USER_GROUP_FIELD_EXTENSIONS,
} = require("./shared/constants/user-group-extensions");
const { hashPassword } = require("./shared/functions/hash-password");
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
const restrictedUser = ["me", "update"];
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
const systemInvoiceNoLimits = [
  "createCarContractInvoice",
  "updateCarContractInvoice",
  "deleteCarContractInvoice",
  "getLatestInvoice",
];
const systemReservationsNoLimits = [
  "createCarReservation",
  "updateCarReservation",
  "deleteCarReservation",
];
const systemContractsNoLimits = [
  "createCarContract",
  "updateCarContract",
  "deleteCarContract",
];
const systemCustomerIndividualsNoLimits = [
  "createGuestIndividual",
  "updateGuestIndividual",
  "deleteGuestIndividual",
];
const systemCustomerOrganisationsNoLimits = [
  "createGuestOrganisation",
  "updateGuestOrganisation",
  "deleteGuestOrganisation",
];
const systemCarGroupsNoLimits = [
  "createCarGroup",
  "updateCarGroup",
  "deleteCarGroup",
];
const systemExtrasNoLimits = ["createExtra", "updateExtra", "deleteExtra"];
const systemCarContractFinesNoLimits = [
  "createCarContractFine",
  "updateCarContractFine",
  "deleteCarContractFine",
];
const systemRecurringDiscountsNoLimits = [
  "createRecurringDiscount",
  "updateRecurringDiscount",
  "deleteRecurringDiscount",
];
const systemTemporaryDiscountsNoLimits = [
  "createTemporaryDiscount",
  "updateTemporaryDiscount",
  "deleteTemporaryDiscount",
];
const systemSystemUsersNoLimits = [
  "createSystemUser",
  "updateSystemUser",
  "deleteSystemUser",
];

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
      "api::police-station.police-station",
      "api::radar-number.radar-number",
      "api::car-contract-fine.car-contract-fine",
      "api::fine.fine",
    ],
    noRestrictions
  );
  let systemReservationPermissions = combineActionWithService(
    ["api::system.system-car-reservation"],
    systemReservationsNoLimits
  );
  let systemContractPermissions = combineActionWithService(
    ["api::system.system-car-contract"],
    systemContractsNoLimits
  );
  let systemCustomerIndividualsPermissions = combineActionWithService(
    ["api::system.system-customer-individual"],
    systemCustomerIndividualsNoLimits
  );
  let systemCustomerOrganisationsPermissions = combineActionWithService(
    ["api::system.system-customer-organisation"],
    systemCustomerOrganisationsNoLimits
  );
  let systemCarGroupsPermissions = combineActionWithService(
    ["api::system.system-car-group"],
    systemCarGroupsNoLimits
  );
  let systemExtrasPermissions = combineActionWithService(
    ["api::system.system-extra"],
    systemExtrasNoLimits
  );
  let systemCarContractFinesPermissions = combineActionWithService(
    ["api::system.system-fine"],
    systemCarContractFinesNoLimits
  );
  let systemRecurringDiscountsPermissions = combineActionWithService(
    ["api::system.system-recurring-discount"],
    systemRecurringDiscountsNoLimits
  );
  let systemTemporaryDiscountsPermissions = combineActionWithService(
    ["api::system.system-temporary-discount"],
    systemTemporaryDiscountsNoLimits
  );
  return [
    ...systemCustomerOrganisationsPermissions,
    ...systemExtrasPermissions,
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
    ...systemCustomerIndividualsPermissions,
    ...systemCarGroupsPermissions,
    ...systemCarContractFinesPermissions,
    ...systemRecurringDiscountsPermissions,
    ...systemTemporaryDiscountsPermissions,
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
      "api::transaction.transaction",
      "api::rental-agreement-detail.rental-agreement-detail",
      "api::agreement-detail.agreement-detail",
      "api::car-contract-invoice.car-contract-invoice",
      "api::car-contract-fine.car-contract-fine",
      "api::fine.fine",
      "api::police-station.police-station",
      "api::radar-number.radar-number",
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
    ["api::system.system-car-reservation"],
    systemReservationsNoLimits
  );
  let systemContractPermissions = combineActionWithService(
    ["api::system.system-car-contract"],
    systemContractsNoLimits
  );
  let systemCustomerIndividualsPermissions = combineActionWithService(
    ["api::system.system-customer-individual"],
    systemCustomerIndividualsNoLimits
  );
  let systemCustomerOrganisationsPermissions = combineActionWithService(
    ["api::system.system-customer-organisation"],
    systemCustomerOrganisationsNoLimits
  );
  let systemInvoicePermissions = combineActionWithService(
    ["api::system.system-car-contract-invoice"],
    systemInvoiceNoLimits
  );
  let systemCarGroupsPermissions = combineActionWithService(
    ["api::system.system-car-group"],
    systemCarGroupsNoLimits
  );
  let systemExtrasPermissions = combineActionWithService(
    ["api::system.system-extra"],
    systemExtrasNoLimits
  );
  let systemCarContractFinesPermissions = combineActionWithService(
    ["api::system.system-fine"],
    systemCarContractFinesNoLimits
  );
  let systemRecurringDiscountsPermissions = combineActionWithService(
    ["api::system.system-recurring-discount"],
    systemRecurringDiscountsNoLimits
  );
  let systemTemporaryDiscountsPermissions = combineActionWithService(
    ["api::system.system-temporary-discount"],
    systemTemporaryDiscountsNoLimits
  );
  return [
    ...systemCustomerOrganisationsPermissions,
    ...systemExtrasPermissions,
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
    ...systemInvoicePermissions,
    ...systemCustomerIndividualsPermissions,
    ...systemCarGroupsPermissions,
    ...systemCarContractFinesPermissions,
    ...systemRecurringDiscountsPermissions,
    ...systemTemporaryDiscountsPermissions,
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
      "api::transaction.transaction",
      "api::rental-agreement-detail.rental-agreement-detail",
      "api::agreement-detail.agreement-detail",
      "api::car-contract-invoice.car-contract-invoice",
      "api::car-contract-fine.car-contract-fine",
      "api::fine.fine",
      "api::police-station.police-station",
      "api::radar-number.radar-number",
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
    ["api::system.system-car-reservation"],
    systemReservationsNoLimits
  );
  let systemContractPermissions = combineActionWithService(
    ["api::system.system-car-contract"],
    systemContractsNoLimits
  );
  let systemCustomerIndividualsPermissions = combineActionWithService(
    ["api::system.system-customer-individual"],
    systemCustomerIndividualsNoLimits
  );
  let systemCustomerOrganisationsPermissions = combineActionWithService(
    ["api::system.system-customer-organisation"],
    systemCustomerOrganisationsNoLimits
  );
  let systemInvoicePermissions = combineActionWithService(
    ["api::system.system-car-contract-invoice"],
    systemInvoiceNoLimits
  );
  let systemCarGroupsPermissions = combineActionWithService(
    ["api::system.system-car-group"],
    systemCarGroupsNoLimits
  );
  let systemExtrasPermissions = combineActionWithService(
    ["api::system.system-extra"],
    systemExtrasNoLimits
  );
  let systemCarContractFinesPermissions = combineActionWithService(
    ["api::system.system-fine"],
    systemCarContractFinesNoLimits
  );
  let systemRecurringDiscountsPermissions = combineActionWithService(
    ["api::system.system-recurring-discount"],
    systemRecurringDiscountsNoLimits
  );
  let systemTemporaryDiscountsPermissions = combineActionWithService(
    ["api::system.system-temporary-discount"],
    systemTemporaryDiscountsNoLimits
  );
  let systemSystemUsersPermissions = combineActionWithService(
    ["api::system.system-user"],
    systemSystemUsersNoLimits
  );
  return [
    ...systemSystemUsersPermissions,
    ...systemCustomerOrganisationsPermissions,
    ...systemExtrasPermissions,
    ...noRestrictionsAvailableEndpointsPermissions,
    ...myOrganizationSkinPermissions,
    ...myOrganizationDetailPermissions,
    ...noRestrictionPermissions,
    ...noRestrictionAuthPermissions,
    ...noRestrictionRolePermissions,
    ...noRestrictionUserPermissions,
    ...noLimitUploadPermissions,
    ...restrictedUserGroupPermissions,
    ...systemCustomerIndividualsPermissions,
    ...systemReservationPermissions,
    ...systemContractPermissions,
    ...systemInvoicePermissions,
    ...systemCarGroupsPermissions,
    ...systemCarContractFinesPermissions,
    ...systemRecurringDiscountsPermissions,
    ...systemTemporaryDiscountsPermissions,
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
  let noLimitUploadPermissions = combineActionWithService(
    ["plugin::upload.content-api"],
    noLimitsUpload
  );
  return [
    ...restrictedPermissions,
    ...noLimitUploadPermissions,
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
  let createReservationFromGroupedCarPermissions = combineActionWithService(
    ["api::consumer.consumer"],
    [
      "createReservationFromCar",
      "getCarReservationByCode",
      "getCarOffers",
      "getCarOffer",
      "createReservationFromGroupedCar",
      "getCarGroupReservationByCode",
      "getCarGroupedOffers",
      "getCarGroupedOffer",
    ]
  );
  return [...createReservationFromGroupedCarPermissions];
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
      ...USER_GROUP_FIELD_EXTENSIONS,
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
