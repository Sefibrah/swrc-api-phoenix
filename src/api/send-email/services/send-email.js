"use strict";

const nodemailer = require("nodemailer");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * send-email service
 */

module.exports = ({ strapi }) => ({
  sendEmailToSelf: async (userGroup, subject, htmlContent) => {
    const organizationDetail = await strapi
      .query("api::organization-detail.organization-detail")
      .findOne({
        where: {
          userGroup,
        },
        populate: {
          contact: {
            fields: ["email"],
          },
        },
      });
    console.log("organizationDetail", organizationDetail);

    // Create a Nodemailer transporter using SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: organizationDetail.contact.email,
      subject,
      html: htmlContent,
    };

    try {
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
