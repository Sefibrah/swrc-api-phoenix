"use strict";
const url = require("url");

const { getSubdomainFromRequest } = require("../../../shared/functions/get-subdomain");
const { getIdAndAttributesSimple } = require("../../../shared/functions/get-id-and-attributes");
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * organization-detail controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::organization-detail.organization-detail",
  ({ strapi }) => ({
    myDetail: async (ctx, next) => {
      try {
        const subdomain = getSubdomainFromRequest(ctx.request);
        const loggedUserUserGroup = await getLoggedUserUserGroup(
          strapi,
          subdomain
        );

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
        const myDetail = getIdAndAttributesSimple(myDetailRaw);
        const address = getIdAndAttributesSimple(myDetail.attributes.address);
        const contact = getIdAndAttributesSimple(myDetail.attributes.contact);
        const paymentDetail = getIdAndAttributesSimple(
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
