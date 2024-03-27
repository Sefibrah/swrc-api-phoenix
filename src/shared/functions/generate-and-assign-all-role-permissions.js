const {
  getAdminPermissions,
} = require("../constants/admin-role-permissions");
const {
  getManagerPermissions,
} = require("../constants/manager-role-permissions");
const {
  getPublicPermissions,
} = require("../constants/public-role-permissions");
const {
  getReceptionistPermissions,
} = require("../constants/receptionist-role-permissions");
const {
  getMechanicPermissions,
} = require("../constants/mechanic-role-permissions");
const {
  getAuthenticatedPermissions,
} = require("../constants/authenticated-role-permissions");
const { hashPassword } = require("../functions/hash-password");

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
    // console.log(
    //   `${index + 1}. from ${
    //     actions.length
    //   }. Creating permission for action ${action} for role ID ${role}`
    // );
    await generatePermission(role, action);
  });
};

const clearAllPermissions = async () => {
  const permissionsRaw = await strapi
    .query("plugin::users-permissions.permission")
    .findMany();
  const permissions = permissionsRaw.map((permission) => permission.id);
  permissions.forEach(async (permission, index) => {
    // console.log(
    //   `${index + 1}. out of ${
    //     permissions.length
    //   }. Deleting active permission of id ${permission}`
    // );
    await strapi.query("plugin::users-permissions.permission").delete({
      where: {
        id: { $eq: permission },
      },
    });
  });
};

const generateAndAssignAllRolePermissions = async () => {
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
  await generateMultiplePermissionsForRole(managerRole.id, managerRoleActions);
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
};

module.exports = { generateAndAssignAllRolePermissions };
