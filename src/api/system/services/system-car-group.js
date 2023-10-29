"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const {
  getIdAndAttributes,
} = require("../../../shared/functions/get-id-and-attributes");

/**
 * system service
 */

module.exports = {
  createCarGroup: async (data, files, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      // const prices = await getPriceIds(strapi, data.prices, carGroup.prices);

      const carGroup = await strapi.entityService.create(
        "api::car-group.car-group",
        {
          data: { ...data, userGroup: loggedUserUserGroup.id },
          files,
        }
      );

      return getIdAndAttributes(carGroup);
    } catch (err) {
      if (err.name == "ValidationError") {
        return new ValidationError(err.message, err.details);
      } else if (err.name == "NotFoundError") {
        return new NotFoundError(err.message, err.details);
      } else {
        return new ApplicationError(err.message, err.details);
      }
    }
  },
  updateCarGroup: async (id, data, files, subdomain) => {
    try {
      console.log("id", id);
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      let carGroup = await strapi.entityService.findOne(
        "api::car-group.car-group",
        id,
        {
          populate: {
            cars: { fields: ["id", "registrationPlate"] },
            prices: { fields: ["id", "minDays", "amount"] },
            thumbnail: { fields: ["id", "url"] },
            inspectionImages: { fields: ["id", "url"] },
          },
        }
      );

      const prices = await getPriceIds(strapi, data.prices, carGroup.prices);

      carGroup = await strapi.entityService.update(
        "api::car-group.car-group",
        id,
        {
          data: {
            ...data,
            prices,
          },
          files,
        }
      );

      console.log("updatedCarGroup", carGroup);

      return getIdAndAttributes(carGroup);
    } catch (err) {
      if (err.name == "ValidationError") {
        return new ValidationError(err.message, err.details);
      } else if (err.name == "NotFoundError") {
        return new NotFoundError(err.message, err.details);
      } else {
        return new ApplicationError(err.message, err.details);
      }
    }
  },
  deleteCarGroup: async (id, subdomain) => {
    try {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );

      const carGroup = await strapi.entityService.findOne(
        "api::car-group.car-group",
        id,
        { populate: { prices: { fields: ["id"] } } }
      );

      for (let i = 0; i < carGroup.prices?.length; i++) {
        const price = carGroup.prices[i];
        await strapi.entityService.delete("api::price.price", price.id);
      }

      // fixme: maybe add the deletion of images from the server and cloud too?

      await strapi.entityService.delete("api::car-group.car-group", id);

      return getIdAndAttributes(carGroup);
    } catch (err) {
      if (err.name == "ValidationError") {
        return new ValidationError(err.message, err.details);
      } else if (err.name == "NotFoundError") {
        return new NotFoundError(err.message, err.details);
      } else {
        return new ApplicationError(err.message, err.details);
      }
    }
  },
};

async function getPriceIds(strapi, pricesFromRequest, pricesFromCarGroupDb) {
  const original = pricesFromCarGroupDb?.map((price) => price.id) || [];
  const remaining = pricesFromRequest?.filter((price) => price.id != null);

  const deleteIds = original
    ?.filter((x) => !remaining?.map((price) => price.id).includes(x))
    ?.concat(
      remaining?.map((price) => price.id).filter((x) => !original.includes(x))
    );

  const priceIds = [];

  // update prices
  for (let i = 0; i < remaining.length; i++) {
    const priceToUpdate = remaining[i];
    const updatedPriceFromDb = await strapi.entityService.update(
      "api::price.price",
      priceToUpdate.id,
      {
        data: priceToUpdate,
      }
    );
    priceIds.push(updatedPriceFromDb.id);
  }

  // create prices
  for (
    let i = 0;
    i < pricesFromRequest.filter((price) => price.id == null).length;
    i++
  ) {
    const priceToCreate = pricesFromRequest.filter((price) => price.id == null)[
      i
    ];
    const createdPriceFromDb = await strapi.entityService.create(
      "api::price.price",
      {
        data: priceToCreate,
      }
    );
    priceIds.push(createdPriceFromDb.id);
  }

  // delete prices
  for (let i = 0; i < deleteIds.length; i++) {
    const priceToDeleteId = deleteIds[i];
    await strapi.entityService.delete("api::price.price", priceToDeleteId);
  }

  return priceIds;
}
