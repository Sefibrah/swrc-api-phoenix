"use strict";

const nodemailer = require("nodemailer");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * send-email service
 */

module.exports = ({ strapi }) => ({
  sendEmail: async (userGroup, subject, htmlContent, recipient = null) => {
    const organizationEmailConfig = await strapi
      .query("api::organization-email-config.organization-email-config")
      .findOne({
        where: {
          userGroup,
        },
        select: ["host", "email", "password", "secure", "port"],
      });
    // console.log("organizationEmailConfig", organizationEmailConfig);

    const self = organizationEmailConfig.email;
    // Create a Nodemailer transporter using SMTP settings
    const transporter = nodemailer.createTransport({
      host: organizationEmailConfig.host,
      port: parseInt(organizationEmailConfig.port),
      secure: JSON.parse(organizationEmailConfig.secure),
      auth: {
        user: self,
        pass: organizationEmailConfig.password,
      },
    });

    // Email options
    const mailOptions = {
      from: self,
      to: recipient == null ? self : recipient,
      subject,
      html: htmlContent,
    };

    // console.log("mailOptions", mailOptions);

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
