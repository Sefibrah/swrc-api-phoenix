"use strict";
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getRandomString,
} = require("../../../shared/functions/get-random-string");
const fs = require("fs");
const util = require("util");

/**
 * A set of functions called "actions" for `send-email`
 */

module.exports = {
  sendEmail: async (ctx, next) => {
    try {
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const recipient = "ibrahim@seferware.com";
      const code = getRandomString();
      const html = fs.readFileSync(
        "src/shared/email/reservation-request-successful.html",
        "utf8"
      );
      const formattedHTML = util.format(html, code);
      const subject = "Hello meow";

      const sendEmail = await strapi
        .service("api::send-email.send-email")
        .sendEmail(userGroup, subject, formattedHTML, recipient);

      ctx.body = sendEmail;
    } catch (err) {
      ctx.body = err;
    }
  },
};
