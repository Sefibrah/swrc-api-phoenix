"use strict";

const {
  getSubdomainFromRequest,
} = require("../../../shared/functions/get-subdomain");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createFromContract: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const contractId = ctx.request.body.contractId;
      const fineBody = ctx.request.body.fine;
      const newFine = await strapi
        .service("api::system.system-fine")
        .createFromContract(contractId, fineBody, subdomain);
      ctx.body = newFine;
      return newFine;
    } catch (err) {
      ctx.body = err;
    }
  },
};
