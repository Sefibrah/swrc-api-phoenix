const { COMMON_PERMISSION_GROUPS } = require("./common-permission-groups");
const { COMMON_ENDPOINT_GROUPS } = require("./common-endpoint-groups");
const {
  combineActionWithService,
} = require("../functions/combine-action-with-service");

const getReceptionistPermissions = () => {
  let restrictedPermissions = combineActionWithService(
    [
      "api::car-group.car-group",
      "api::location.location",
      "api::invoice-place-of-issue.invoice-place-of-issue",
      "api::address-of-stay.address-of-stay",
      "api::vehicle-type.vehicle-type",
      "api::discount.discount",
      "api::recurring-discount.recurring-discount",
      "api::temporary-discount.temporary-discount",
      "api::price.price",
      "api::mileage.mileage",
    ],
    COMMON_ENDPOINT_GROUPS.restricted
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
    COMMON_ENDPOINT_GROUPS.noDelete
  );
  let noRestrictionPermissions = combineActionWithService(
    [
      "api::service-location.service-location",
      "api::type-of-service.type-of-service",
      "api::flight-number.flight-number",
      "api::place-of-issue.place-of-issue",
      "api::mileage.mileage",
      "api::police-station.police-station",
      "api::radar-number.radar-number",
      "api::car-contract-fine.car-contract-fine",
      "api::fine.fine",
    ],
    COMMON_ENDPOINT_GROUPS.noRestrictions
  );
  return [
    ...restrictedPermissions,
    ...noDeletePermissions,
    ...noRestrictionPermissions,
    ...COMMON_PERMISSION_GROUPS.extrasRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.carsRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.systemCarsPermissions,
    ...COMMON_PERMISSION_GROUPS.systemCustomerOrganisationsPermissions,
    ...COMMON_PERMISSION_GROUPS.systemExtrasPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserSettingPermissions,
    ...COMMON_PERMISSION_GROUPS.noRestrictionsAuthPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserPermissions,
    ...COMMON_PERMISSION_GROUPS.noDeleteUploadPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationSkinPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationDetailRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserGroupPermissions,
    ...COMMON_PERMISSION_GROUPS.systemReservationPermissions,
    ...COMMON_PERMISSION_GROUPS.systemContractPermissions,
    ...COMMON_PERMISSION_GROUPS.systemCustomerIndividualsPermissions,
    ...COMMON_PERMISSION_GROUPS.systemCarGroupsPermissions,
    ...COMMON_PERMISSION_GROUPS.systemCarContractFinesPermissions,
    ...COMMON_PERMISSION_GROUPS.systemRecurringDiscountsPermissions,
    ...COMMON_PERMISSION_GROUPS.systemTemporaryDiscountsPermissions,
    ...COMMON_PERMISSION_GROUPS.createReservationFromGroupedCarPermissions,
  ];
};

module.exports = { getReceptionistPermissions };
