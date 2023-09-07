"use strict";

const { getSubdomainFromRequest } = require("../../../shared/functions/get-subdomain");

/**
 * A set of functions called "actions" for `system`
 */

module.exports = {
  createInvoiceFromContract: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const contractId = ctx.request.body.contractId;
      const invoiceBody = ctx.request.body.invoice;
      const newInvoice = await strapi
        .service("api::system.system-invoice")
        .createInvoiceFromContract(contractId, invoiceBody, subdomain);
      ctx.body = newInvoice;
      return newInvoice;
    } catch (err) {
      ctx.body = err;
    }
  },

  getLatestInvoice: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const latest = await strapi
        .service("api::system.system-invoice")
        .getLatestInvoice(subdomain);
      ctx.body = latest;
      return latest;
    } catch (err) {
      ctx.body = err;
    }
  },
};
