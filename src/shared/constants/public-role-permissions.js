const {
  COMMON_PERMISSION_GROUPS,
} = require("./common-permission-groups");
const { COMMON_ENDPOINT_GROUPS } = require("./common-endpoint-groups");
const { combineActionWithService } = require("../functions/combine-action-with-service");

const getPublicPermissions = () => {
  let availableEndpointsPermissions = combineActionWithService(
    ["api::car-helpers.car-helpers", "api::extra.extra"],
    COMMON_ENDPOINT_GROUPS.availabilityLimited
  );
  let restrictedPermissions = combineActionWithService(
    [
      "api::flight-number.flight-number",
      "api::vehicle-type.vehicle-type",
      "api::location.location",
    ],
    COMMON_ENDPOINT_GROUPS.restricted
  );
  let importPermissions = combineActionWithService(
    ["api::import.import"],
    ["importReservationFromGTRC", "importContractFromGTRC"]
  );
  let sendEmailPermissions = combineActionWithService(
    ["api::send-email.send-email"],
    ["sendEmailToSelf"]
  );
  return [
    ...importPermissions,
    ...sendEmailPermissions,
    ...restrictedPermissions,
    ...availableEndpointsPermissions,
    ...COMMON_PERMISSION_GROUPS.noLimitUploadPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationSkinRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationDetailPermissions,
    ...COMMON_PERMISSION_GROUPS.noRestrictionsAuthPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserGroupPermissions,
    ...COMMON_PERMISSION_GROUPS.createReservationFromGroupedCarPermissions,
  ];
};

module.exports = { getPublicPermissions };
