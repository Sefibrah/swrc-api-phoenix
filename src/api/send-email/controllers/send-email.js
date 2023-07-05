"use strict";
const { getSubdomainFromRequest } = require("../../../shared/get-subdomain");
const fs = require("fs");
const util = require("util");

/**
 * A set of functions called "actions" for `send-email`
 */

module.exports = {
  sendEmail: async (ctx, next) => {
    try {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const recipient = "ibrahim@seferware.com";
      const code = (Math.random() * 1000000).toString(36).replace(".", "");
      const html = fs.readFileSync(
        "src/shared/email/reservation-request-successful.html",
        "utf8"
      );
      const formattedHTML = util.format(html, code);
      const subject = "Hello meow";

      const sendEmail = await strapi
        .service("api::send-email.send-email")
        .sendEmail(recipient, formattedHTML, subject, subdomain);

      ctx.body = sendEmail;
    } catch (err) {
      ctx.body = err;
    }
  },
};
