"use strict";

const nodemailer = require("nodemailer");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * send-email service
 */

module.exports = ({ strapi }) => ({
  sendEmail: async (recipient, html, subject, subdomain) => {
    const loggedUserUserGroup = await getLoggedUserUserGroup(strapi, subdomain);

    const organizationEmailConfig = await strapi
      .query("api::organization-email-config.organization-email-config")
      .findOne({
        where: {
          userGroup: loggedUserUserGroup.id,
        },
        select: ["host", "email", "password"],
      });

    console.log("organizationEmailConfig", organizationEmailConfig);
    // Create a Nodemailer transporter using SMTP settings
    const transporter = nodemailer.createTransport({
      host: organizationEmailConfig.host,
      port: 465,
      secure: true,
      auth: {
        user: organizationEmailConfig.email,
        pass: organizationEmailConfig.password,
      },
    });
    console.log("transporter", transporter);

    // Email options
    const mailOptions = {
      from: organizationEmailConfig.email,
      to: recipient,
      subject,
      html,
    };
    console.log("mailOptions", mailOptions);

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);
      return "Email sent successfully";
    } catch (error) {
      console.error("Error sending email:", error);
      strapi
        .plugin("sentry")
        .service("sentry")
        .sendError(`error: ${JSON.stringify(error)}`);
      return error;
    }
  },
});
