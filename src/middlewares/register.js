const {
  getUserGroupId,
} = require("../shared/functions/get-logged-user-user-group");

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
    if (
      ctx.request.url.includes("/api/auth/local/register") &&
      ctx.response.status === 200
    ) {
      const userGroup = await getUserGroupId(strapi, ctx.request);

      const email = ctx.response.body.user.email;
      const telephone = ctx.response.body.user.telephone;
      const dateOfBirth = ctx.response.body.user.dateOfBirth;
      const name = ctx.response.body.user.username;

      const contact = await createContact(email, "", telephone, userGroup);

      const individual = await createIndividual(
        contact.id,
        dateOfBirth,
        name,
        userGroup
      );
      const customer = await createCustomer(
        individual.id,
        contact.id,
        // name,
        "USER",
        userGroup
      );
      await updateIndividual(individual.id, customer.id);
      await updateUser(ctx.response.body.user.id, userGroup);
    }
  };
};
