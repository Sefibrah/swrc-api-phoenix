const {
  COMMON_PERMISSION_GROUPS,
} = require("./common-permission-groups");
const { COMMON_ENDPOINT_GROUPS } = require("./common-endpoint-groups");
const { combineActionWithService } = require("../functions/combine-action-with-service");

const getAuthenticatedPermissions = () => {
  let availableEndpointsPermissions = combineActionWithService(
    ["api::car-helpers.car-helpers", "api::extra.extra"],
    COMMON_ENDPOINT_GROUPS.availabilityLimited
  );
  let restrictedPermissions = combineActionWithService(
    [
      "api::extra.extra",
      "api::flight-number.flight-number",
      "api::vehicle-type.vehicle-type",
      "api::location.location",
    ],
    COMMON_ENDPOINT_GROUPS.restricted
  );
  return [
    ...availableEndpointsPermissions,
    ...restrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserSettingPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationSkinRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.myOrganizationDetailRestrictedPermissions,
    ...COMMON_PERMISSION_GROUPS.noRestrictionsAuthPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserPermissions,
    ...COMMON_PERMISSION_GROUPS.noDeleteUploadPermissions,
    ...COMMON_PERMISSION_GROUPS.restrictedUserGroupPermissions,
    ...COMMON_PERMISSION_GROUPS.createReservationFromGroupedCarPermissions,
  ];
};

module.exports = { getAuthenticatedPermissions };
