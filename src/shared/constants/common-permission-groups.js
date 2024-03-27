const { COMMON_ENDPOINT_GROUPS } = require("./common-endpoint-groups");
const { combineActionWithService } = require("../functions/combine-action-with-service");

const extrasRestrictedPermissions = combineActionWithService(
  ["api::extra.extra"],
  [...COMMON_ENDPOINT_GROUPS.availabilityNoLimits, ...COMMON_ENDPOINT_GROUPS.restricted]
);
const carsRestrictedPermissions = combineActionWithService(
  ["api::car.car"],
  [...COMMON_ENDPOINT_GROUPS.restricted, ...COMMON_ENDPOINT_GROUPS.relevantEventsNoLimits, ...COMMON_ENDPOINT_GROUPS.availabilityNoLimits]
);
const systemTemporaryDiscountsPermissions = combineActionWithService(
  ["api::system.system-temporary-discount"],
  COMMON_ENDPOINT_GROUPS.systemTemporaryDiscountsNoLimits
);
const systemRecurringDiscountsPermissions = combineActionWithService(
  ["api::system.system-recurring-discount"],
  COMMON_ENDPOINT_GROUPS.systemRecurringDiscountsNoLimits
);
const restrictedUserSettingPermissions = combineActionWithService(
  ["api::user-setting.user-setting"],
  COMMON_ENDPOINT_GROUPS.restrictedUserSetting
);
const systemCarContractFinesPermissions = combineActionWithService(
  ["api::system.system-fine"],
  COMMON_ENDPOINT_GROUPS.systemCarContractFinesNoLimits
);
const myOrganizationDetailPermissions = combineActionWithService(
  ["api::organization-detail.organization-detail"],
  COMMON_ENDPOINT_GROUPS.myOrganizationDetail
);
const noDeleteUploadPermissions = combineActionWithService(
  ["plugin::upload.content-api"],
  COMMON_ENDPOINT_GROUPS.noDeleteUpload
);
const myOrganizationSkinPermissions = combineActionWithService(
  ["api::organization-skin.organization-skin"],
  COMMON_ENDPOINT_GROUPS.myOrganizationSkin
);
const noRestrictionsAuthPermissions = combineActionWithService(
  ["plugin::users-permissions.auth"],
  COMMON_ENDPOINT_GROUPS.noRestrictionsAuth
);
const restrictedUserGroupPermissions = combineActionWithService(
  ["plugin::multi-tenant.user-group"],
  COMMON_ENDPOINT_GROUPS.restrictedUserGroup
);
const restrictedUserPermissions = combineActionWithService(
  ["plugin::users-permissions.user"],
  COMMON_ENDPOINT_GROUPS.restrictedUser
);
const systemReservationPermissions = combineActionWithService(
  ["api::system.system-car-reservation"],
  COMMON_ENDPOINT_GROUPS.systemReservationsNoLimits
);
const systemContractPermissions = combineActionWithService(
  ["api::system.system-car-contract"],
  COMMON_ENDPOINT_GROUPS.systemContractsNoLimits
);
const systemCustomerIndividualsPermissions = combineActionWithService(
  ["api::system.system-customer-individual"],
  COMMON_ENDPOINT_GROUPS.systemCustomerIndividualsNoLimits
);
const systemCustomerOrganisationsPermissions = combineActionWithService(
  ["api::system.system-customer-organisation"],
  COMMON_ENDPOINT_GROUPS.systemCustomerOrganisationsNoLimits
);
const systemCarGroupsPermissions = combineActionWithService(
  ["api::system.system-car-group"],
  COMMON_ENDPOINT_GROUPS.systemCarGroupsNoLimits
);
const systemCarsPermissions = combineActionWithService(
  ["api::system.system-car"],
  COMMON_ENDPOINT_GROUPS.systemCarsNoLimits
);
const systemExtrasPermissions = combineActionWithService(
  ["api::system.system-extra"],
  COMMON_ENDPOINT_GROUPS.systemExtrasNoLimits
);
const noLimitUploadPermissions = combineActionWithService(
  ["plugin::upload.content-api"],
  COMMON_ENDPOINT_GROUPS.noLimitsUpload
);
const myOrganizationSkinRestrictedPermissions = combineActionWithService(
  ["api::organization-skin.organization-skin"],
  COMMON_ENDPOINT_GROUPS.myOrganizationSkinRestricted
);
const myOrganizationDetailRestrictedPermissions = combineActionWithService(
  ["api::organization-detail.organization-detail"],
  COMMON_ENDPOINT_GROUPS.myOrganizationDetailRestricted
);
const systemInvoicePermissions = combineActionWithService(
  ["api::system.system-car-contract-invoice"],
  COMMON_ENDPOINT_GROUPS.systemInvoiceNoLimits
);
const createReservationFromGroupedCarPermissions = combineActionWithService(
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

const COMMON_PERMISSION_GROUPS = {
  extrasRestrictedPermissions,
  carsRestrictedPermissions,
  systemTemporaryDiscountsPermissions,
  systemRecurringDiscountsPermissions,
  restrictedUserSettingPermissions,
  systemCarContractFinesPermissions,
  myOrganizationDetailPermissions,
  noDeleteUploadPermissions,
  myOrganizationSkinPermissions,
  noRestrictionsAuthPermissions,
  restrictedUserGroupPermissions,
  restrictedUserPermissions,
  systemReservationPermissions,
  systemContractPermissions,
  systemCustomerIndividualsPermissions,
  systemCustomerOrganisationsPermissions,
  systemCarGroupsPermissions,
  systemCarsPermissions,
  systemExtrasPermissions,
  noLimitUploadPermissions,
  myOrganizationSkinRestrictedPermissions,
  myOrganizationDetailRestrictedPermissions,
  systemInvoicePermissions,
  createReservationFromGroupedCarPermissions,
};

module.exports = { COMMON_PERMISSION_GROUPS };
