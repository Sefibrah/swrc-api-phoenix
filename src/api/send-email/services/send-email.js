"use strict";

const nodemailer = require("nodemailer");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/get-logged-user-user-group");

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

    // Email options
    const mailOptions = {
      from: organizationEmailConfig.email,
      to: recipient,
      subject,
      html,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return error;
      }
      console.log(info);
      return "Email sent successfully";
    });
  },
});