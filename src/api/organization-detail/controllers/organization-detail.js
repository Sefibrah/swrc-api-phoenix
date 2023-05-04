"use strict";
const url = require("url");

/**
 * organization-detail controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::organization-detail.organization-detail",
  ({ strapi }) => ({
    myDetail: async (ctx, next) => {
      try {
        let subdomain = null;
        // makes sense only when i am doing it on localhost, for production this should never work
        // unless a hacker comes??
        console.log(ctx.req.headers.host);
        strapi
          .plugin("sentry")
          .service("sentry")
          .sendError(`ctx.req.headers.host: ${ctx.req.headers.host}; ctx.subdomains: ${ctx.subdomains}`);
        if (ctx.req.headers.host.includes("localhost")) {
          subdomain = "seferware";
        } else {
          const subdomains = ctx.subdomains;
          const mainDomain = subdomains.pop();
          subdomain = subdomains.join(".");
        }
        const loggedUserUserGroup = await strapi
          .query("plugin::multi-tenant.user-group")
          .findOne({
            where: {
              name: { $eq: subdomain },
            },
          });

        const myDetailRaw = await strapi
          .query("api::organization-detail.organization-detail")
          .findOne({
            populate: {
              contact: {
                select: [
                  "id",
                  "email",
                  "website",
                  "telephonePrimary",
                  "telephoneSecondary",
                ],
              },
              address: {
                select: [
                  "id",
                  "country",
                  "city",
                  "state",
                  "province",
                  "postalCode",
                  "addressLine1",
                  "addressLine2",
                  "addressLine3",
                ],
              },
              paymentDetail: {
                select: [
                  "id",
                  "bankName",
                  "localCurrencyAccountNumber",
                  "foreignCurrencyAccountNumber",
                  "IBAN",
                  "swiftCode",
                ],
              },
            },
            where: {
              userGroup: loggedUserUserGroup.id,
            },
          });
        const myDetail = getIdAndAttributes(myDetailRaw);
        const address = getIdAndAttributes(myDetail.attributes.address);
        const contact = getIdAndAttributes(myDetail.attributes.contact);
        const paymentDetail = getIdAndAttributes(
          myDetail.attributes.paymentDetail
        );
        ctx.body = {
          data: {
            id: myDetail.id,
            attributes: {
              ...myDetail.attributes,
              contact: {
                id: contact.id,
                attributes: contact.attributes,
              },
              address: {
                id: address.id,
                attributes: address.attributes,
              },
              paymentDetail: {
                id: paymentDetail.id,
                attributes: paymentDetail.attributes,
              },
            },
          },
        };
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);

function getIdAndAttributes(obj) {
  const { id, ...attributes } = obj;
  return {
    id,
    attributes,
  };
}
