const url = require("url");
const { getSubdomainFromRequest } = require("../shared/get-subdomain")
const { getLoggedUserUserGroup } = require("../shared/get-logged-user-user-group")

const createContact = async (
  email,
  telephonePrimary,
  telephoneSecondary,
  userGroup
) => {
  return await strapi.entityService.create("api::contact.contact", {
    data: {
      email,
      telephonePrimary,
      telephoneSecondary,
      userGroup,
    },
  });
};
const createIndividual = async (contactId, dateOfBirth, name, userGroup) => {
  return await strapi.entityService.create("api::individual.individual", {
    data: {
      contact: contactId,
      dateOfBirth,
      name,
      userGroup,
    },
  });
};

const createCustomer = async (
  individualId,
  contactId,
  // name,
  type,
  userGroup,
  isLocal = false
) => {
  return await strapi.entityService.create("api::customer.customer", {
    data: {
      individual: individualId,
      contact: contactId,
      // name,
      type,
      isLocal,
      userGroup,
    },
  });
};
const updateIndividual = async (id, customerId) => {
  return await strapi.entityService.update("api::individual.individual", id, {
    data: {
      customer: customerId,
    },
  });
};
const updateUser = async (id, userGroup) => {
  return await strapi.entityService.update(
    "plugin::users-permissions.user",
    id,
    {
      data: {
        userGroup,
      },
    }
  );
};

module.exports = () => {
  return async (ctx, next) => {
    await next();
    const subdomain = getSubdomainFromRequest(ctx.request);
    if (
      ctx.request.url.includes("/api/auth/local/register") &&
      ctx.response.status === 200
    ) {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const email = ctx.response.body.user.email;
      const telephone = ctx.response.body.user.telephone;
      const dateOfBirth = ctx.response.body.user.dateOfBirth;
      const name = ctx.response.body.user.username;

      const contact = await createContact(
        email,
        "",
        telephone,
        loggedUserUserGroup.id
      );

      const individual = await createIndividual(
        contact.id,
        dateOfBirth,
        name,
        loggedUserUserGroup.id
      );
      const customer = await createCustomer(
        individual.id,
        contact.id,
        // name,
        "USER",
        loggedUserUserGroup.id
      );
      await updateIndividual(individual.id, customer.id);
      await updateUser(ctx.response.body.user.id, loggedUserUserGroup.id);
    }
  };
};
