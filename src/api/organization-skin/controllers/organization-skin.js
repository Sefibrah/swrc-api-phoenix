"use strict";
const url = require("url");
/**
 * organization-skin controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { getSubdomainFromRequest } = require("../../../shared/get-subdomain");
const { getLoggedUserUserGroup } = require("../../../shared/get-logged-user-user-group")
const { getIdAndAttributes } = require("../../../shared/get-id-and-attributes")

module.exports = createCoreController(
  "api::organization-skin.organization-skin",
  ({ strapi }) => ({
    mySkin: async (ctx, next) => {
      try {
        const subdomain = getSubdomainFromRequest(ctx.request);
        const loggedUserUserGroup = await getLoggedUserUserGroup(
          strapi,
          subdomain
        );

        const mySkinRaw = await strapi
          .query("api::organization-skin.organization-skin")
          .findOne({
            populate: {
              iconDark: {
                select: ["id", "url"],
              },
              iconLight: {
                select: ["id", "url"],
              },
              logoDark: {
                select: ["id", "url"],
              },
              logoLight: {
                select: ["id", "url"],
              },
            },
            where: {
              userGroup: loggedUserUserGroup.id,
            },
          });
        const mySkin = getIdAndAttributes(mySkinRaw);
        const iconDark = getIdAndAttributes(mySkin.attributes.iconDark);
        const iconLight = getIdAndAttributes(mySkin.attributes.iconLight);
        const logoDark = getIdAndAttributes(mySkin.attributes.logoDark);
        const logoLight = getIdAndAttributes(mySkin.attributes.logoLight);
        ctx.body = {
          data: {
            id: mySkin.id,
            attributes: {
              ...mySkin.attributes,
              iconDark: {
                id: iconDark?.id,
                attributes: iconDark?.attributes,
              },
              iconLight: {
                id: iconLight?.id,
                attributes: iconLight?.attributes,
              },
              logoDark: {
                id: logoDark?.id,
                attributes: logoDark?.attributes,
              },
              logoLight: {
                id: logoLight?.id,
                attributes: logoLight?.attributes,
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
