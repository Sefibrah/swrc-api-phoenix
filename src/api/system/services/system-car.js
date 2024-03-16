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
  createCar: async (data, userGroup) => {
    try {
      const mileages = [];
      for (let i = 0; i < data.mileages.length; i++) {
        const mileage = data.mileages[i];
        const mileageFromDb = await strapi.entityService.create(
          "api::mileage.mileage",
          {
            data: {
              amount: mileage.amount,
              timestamp: mileage.timestamp,
              userGroup,
            },
          }
        );
        mileages.push(mileageFromDb.id);
      }

      const car = await strapi.entityService.create("api::car.car", {
        data: { ...data, prices, userGroup },
      });

      return getIdAndAttributes(car);
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
  updateCar: async (id, data, userGroup) => {
    try {
      let car = await strapi.entityService.findOne("api::car.car", id, {
        populate: {
          mileages: { fields: ["id", "amount", "timestamp"] },
        },
      });

      const mileages = await getMileageIds(
        strapi,
        userGroup,
        data.mileages,
        car.mileages
      );

      car = await strapi.entityService.update("api::car.car", id, {
        data: {
          ...data,
          mileages,
        },
      });

      console.log("updatedCar", car);

      return getIdAndAttributes(car);
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
  deleteCar: async (id, userGroup) => {
    try {
      const car = await strapi.entityService.findOne("api::car.car", id, {
        populate: { mileages: { fields: ["id"] } },
      });

      for (let i = 0; i < car.mileages?.length; i++) {
        const mileage = car.mileages[i];
        await strapi.entityService.delete("api::mileage.mileage", mileage.id);
      }

      await strapi.entityService.delete("api::car.car", id);

      return getIdAndAttributes(car);
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
  setMileageByCarId: async (id, data, userGroup) => {
    try {
      console.log("data", data);
      const car = await strapi.entityService.findOne("api::car.car", id, {
        populate: { mileages: { fields: ["id", "amount", "timestamp"] } },
      });
      // if there is a mileage with the same timestamp, update it
      for (let i = 0; i < car.mileages?.length; i++) {
        const mileage = car.mileages[i];
        if (
          new Date(mileage.timestamp).setHours(0, 0, 0) ===
          new Date(data.timestamp).setHours(0, 0, 0)
        ) {
          const updatedMileage = await strapi.entityService.update(
            "api::mileage.mileage",
            mileage.id,
            {
              data: {
                amount: data.amount,
                timestamp: data.timestamp,
              },
            }
          );
          console.log("updatedMileage", mileage);
          return getIdAndAttributes(updatedMileage);
        }
      }
      // if there is no mileage with the same timestamp, create a new one
      const mileage = await strapi.entityService.create(
        "api::mileage.mileage",
        {
          data: { amount: data.amount, timestamp: data.timestamp, userGroup },
        }
      );
      // add the new mileage to the car
      await strapi.entityService.update("api::car.car", id, {
        data: {
          mileages: [...car.mileages.map((mileage) => mileage.id), mileage.id],
        },
      });
      console.log("createdMileage", mileage);
      return getIdAndAttributes(mileage);
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

async function getMileageIds(
  strapi,
  userGroup,
  mileagesFromRequest,
  mileagesFromCarDb
) {
  const original = mileagesFromCarDb?.map((mileage) => mileage.id) || [];
  const remaining = mileagesFromRequest?.filter(
    (mileage) => mileage.id != null
  );

  const deleteIds = original
    ?.filter((x) => !remaining?.map((mileage) => mileage.id).includes(x))
    ?.concat(
      remaining
        ?.map((mileage) => mileage.id)
        .filter((x) => !original.includes(x))
    );

  const mileagesIds = [];

  // update mileages
  for (let i = 0; i < remaining.length; i++) {
    const mileageToUpdate = remaining[i];
    const updatedMileageFromDb = await strapi.entityService.update(
      "api::mileage.mileage",
      mileageToUpdate.id,
      {
        data: mileageToUpdate,
      }
    );
    mileagesIds.push(updatedMileageFromDb.id);
  }

  // create mileages
  for (
    let i = 0;
    i < mileagesFromRequest.filter((mileage) => mileage.id == null).length;
    i++
  ) {
    const mileageToCreate = mileagesFromRequest.filter(
      (mileage) => mileage.id == null
    )[i];
    const createdMileageFromDb = await strapi.entityService.create(
      "api::mileage.mileage",
      {
        data: mileageToCreate,
        userGroup,
      }
    );
    mileagesIds.push(createdMileageFromDb.id);
  }

  // delete mileages
  for (let i = 0; i < deleteIds.length; i++) {
    const mileageToDeleteId = deleteIds[i];
    await strapi.entityService.delete(
      "api::mileage.mileage",
      mileageToDeleteId
    );
  }

  return mileagesIds;
}
