const createContact = async (email, telephonePrimary, telephoneSecondary) => {
  return await strapi.entityService.create("api::contact.contact", {
    data: {
      email,
      telephonePrimary,
      telephoneSecondary,
    },
  });
};
const createIndividual = async (contactId, dateOfBirth) => {
  return await strapi.entityService.create("api::individual.individual", {
    data: {
      contact: contactId,
      dateOfBirth,
    },
  });
};

const createCustomer = async (
  individualId,
  contactId,
  name,
  type,
  isLocal = false
) => {
  return await strapi.entityService.create("api::customer.customer", {
    data: {
      individual: individualId,
      contact: contactId,
      name,
      type,
      isLocal,
    },
  });
};
const updateIndividual = async (id, customerId) => {
  return await strapi.entityService.update("api::individual.individual", {
    id,
    data: {
      customer: customerId,
    },
  });
};

module.exports = () => {
  return async (ctx, next) => {
    await next();
    // only if path was register with newsletter param and it was successfull. Then we will put user in the mailing list.
    if (
      ctx.request.url === "/auth/local/register" &&
      ctx.response.status === 200
    ) {
      const email = ctx.response.body.user.email;
      const telephone = ctx.response.body.user.telephone;
      const dateOfBirth = ctx.response.body.user.dateOfBirth;
      const name = ctx.response.body.user.name;
      const contact = await createContact(email, "", telephone);
      const individual = await createIndividual(contact.id, dateOfBirth);
      const customer = await createCustomer(
        individual.id,
        contact.id,
        name,
        "USER"
      );
      const updatedIndividual = await updateIndividual(
        individual.id,
        customer.id
      );
    }
  };
};
