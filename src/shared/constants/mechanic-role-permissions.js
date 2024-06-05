const { COMMON_PERMISSION_GROUPS } = require("./common-permission-groups");
const { COMMON_ENDPOINT_GROUPS } = require("./common-endpoint-groups");
const {
  combineActionWithService,
} = require("../functions/combine-action-with-service");

const getMechanicPermissions = () => {
  let restrictedPermissions = combineActionWithService(
    [
      "api::contact.contact",
      "api::flight-number.flight-number",
      "api::car-group.car-group",
      "api::location.location",
      "api::invoice-place-of-issue.invoice-place-of-issue",
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
    COMMON_ENDPOINT_GROUPS.restricted
  );
  let noDeletePermissions = combineActionWithService(
    [
      "api::car-maintenance.car-maintenance",
      "api::transaction.transaction",
      "api::agreement-detail.agreement-detail",
    ],
    COMMON_ENDPOINT_GROUPS.noDelete
  );
  let noRestrictionPermissions = combineActionWithService(
    [
      "api::service-location.service-location",
      "api::type-of-service.type-of-service",
      "api::mileage.mileage",
    ],
    COMMON_ENDPOINT_GROUPS.noRestrictions
  );
  return [
    ...restrictedPermissions,
    ...noDeletePermissions,
    ...noRestrictionPermissions,
    ...COMMON_PERMISSION_GROUPS.pdfPermissions,
    ...COMMON_PERMISSION_GROUPS.extrasRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.carsRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserSettingPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationSkinPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationDetailRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.noRestrictionsAuthPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserPermissions,
    ...COMMON_PERMISSION_GROUPS.noDeleteUploadPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserGroupPermissions,
    ...COMMON_PERMISSION_GROUPS.createReservationFromGroupedCarPermissions,
  ];
};

module.exports = { getMechanicPermissions };
