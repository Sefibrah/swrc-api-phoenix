const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");

module.exports = async (policyContext, config, { strapi }) => {
  const targetSymbol = Object.getOwnPropertySymbols(policyContext).find(
    (symbol) => symbol.toString() === "Symbol(context#_contextSession)"
  );

  const subdomain = await getSubdomainFromRequest(
    policyContext[targetSymbol].ctx.request
  );

  if (subdomain != null) {
    const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);

    return loggedUserUserGroup.id != null;
  } else {
    return false;
  }
};
