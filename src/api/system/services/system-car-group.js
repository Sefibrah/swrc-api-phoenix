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
  createCarGroup: async (data, files, userGroup) => {
    try {
      let prices = [];
      for (let i = 0; i < data.prices.length; i++) {
        const price = data.prices[i];
        const priceFromDb = await strapi.entityService.create(
          "api::price.price",
          {
            data: {
              minDays: price.minDays,
              amount: price.amount,
              userGroup,
            },
          }
        );
        prices.push(priceFromDb.id);
      }

      const carGroup = await strapi.entityService.create(
        "api::car-group.car-group",
        {
          data: { ...data, prices, userGroup },
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
  updateCarGroup: async (id, data, files, userGroup) => {
    try {
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

      const prices = await getPriceIds(
        strapi,
        userGroup,
        data.prices,
        carGroup.prices
      );

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
  deleteCarGroup: async (id, userGroup) => {
    try {
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

async function getPriceIds(
  strapi,
  userGroup,
  pricesFromRequest,
  pricesFromCarGroupDb
) {
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
        userGroup,
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
