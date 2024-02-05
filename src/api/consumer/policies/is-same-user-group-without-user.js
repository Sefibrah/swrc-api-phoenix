const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

module.exports = async (policyContext, config, { strapi }) => {
  const targetSymbol = Object.getOwnPropertySymbols(policyContext).find(
    (symbol) => symbol.toString() === "Symbol(context#_contextSession)"
  );

  const userGroup = await getUserGroupId(
    strapi,
    policyContext[targetSymbol].ctx.request
  );
  return userGroup != null;
};
