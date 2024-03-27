// most common

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
const noRestrictionsUser = [
  "count",
  "create",
  "destroy",
  "find",
  "findOne",
  "me",
  "update",
];
const availabilityLimited = ["available"];
const systemSystemUsersNoLimits = [
  "createSystemUser",
  "updateSystemUser",
  "deleteSystemUser",
];

// partially common

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
const systemCarsNoLimits = [
  "createCar",
  "updateCar",
  "deleteCar",
  "setMileageByCarId",
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
const systemInvoiceNoLimits = [
  "createCarContractInvoice",
  "updateCarContractInvoice",
  "deleteCarContractInvoice",
  "getLatestInvoice",
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
const relevantEventsNoLimits = ["relevantEventsList", "relevantEventsListById"];
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

const COMMON_ENDPOINT_GROUPS = {
  restricted,
  noRestrictions,
  noDelete,
  noRestrictionsRole,
  noRestrictionsUser,
  availabilityLimited,
  systemSystemUsersNoLimits,
  systemReservationsNoLimits,
  systemContractsNoLimits,
  systemCustomerIndividualsNoLimits,
  systemCustomerOrganisationsNoLimits,
  systemCarGroupsNoLimits,
  systemCarsNoLimits,
  systemExtrasNoLimits,
  systemCarContractFinesNoLimits,
  systemRecurringDiscountsNoLimits,
  systemTemporaryDiscountsNoLimits,
  systemInvoiceNoLimits,
  restrictedUser,
  noLimitsUpload,
  noDeleteUpload,
  restrictedUserGroup,
  restrictedUserSetting,
  myOrganizationSkin,
  myOrganizationSkinRestricted,
  myOrganizationDetail,
  myOrganizationDetailRestricted,
  availabilityNoLimits,
  relevantEventsNoLimits,
  noRestrictionsAuth,
};

module.exports = { COMMON_ENDPOINT_GROUPS };
