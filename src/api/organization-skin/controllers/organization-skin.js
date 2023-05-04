"use strict";
const url = require("url");
/**
 * organization-skin controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::organization-skin.organization-skin",
  ({ strapi }) => ({
    mySkin: async (ctx, next) => {
      try {
        let subdomain = null;
        // makes sense only when i am doing it on localhost, for production this should never work
        // unless a hacker comes??
        console.log(ctx.req.headers.host);
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
                id: iconDark.id,
                attributes: iconDark.attributes,
              },
              iconLight: {
                id: iconLight.id,
                attributes: iconLight.attributes,
              },
              logoDark: {
                id: logoDark.id,
                attributes: logoDark.attributes,
              },
              logoLight: {
                id: logoLight.id,
                attributes: logoLight.attributes,
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
