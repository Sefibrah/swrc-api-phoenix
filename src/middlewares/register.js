const url = require("url");

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
    let subdomain = null;
    // makes sense only when i am doing it on localhost, for production this should never work
    // unless a hacker comes??
    console.log(ctx.req.headers.host);
    if (ctx.req.headers.host.includes("localhost")) {
      subdomain = "seferware";
    } else {
      const host = ctx.req.headers.host;
      subdomain = host.split(".")[0];
    }
    if (
      ctx.request.url.includes("/api/auth/local/register") &&
      ctx.response.status === 200
    ) {
      const loggedUserUserGroup = await strapi
        .query("plugin::multi-tenant.user-group")
        .findOne({
          where: {
            name: { $eq: subdomain },
          },
        });

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
