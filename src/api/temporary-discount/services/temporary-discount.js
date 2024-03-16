"use strict";
const { getDays } = require("../../../shared/functions/get-days");
const {
  getLatestPriceColumn,
} = require("../../../shared/functions/get-latest-price-column");

/**
 * temporary-discount service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::temporary-discount.temporary-discount",
  ({ strapi }) => ({
    doesCarGroupHaveDiscountInGivenPeriod: async (
      carGroupId,
      startDatetime,
      endDatetime,
      userGroup
    ) => {
      const temporaryDiscounts = await strapi
        .query("api::temporary-discount.temporary-discount")
        .findMany({
          where: {
            discount: {
              carGroups: {
                id: carGroupId,
              },
            },
            userGroup,
          },
          populate: {
            discount: {
              populate: {
                fields: ["amount", "type", ""],
                carGroups: {
                  populate: {
                    fields: ["id"],
                  },
                },
              },
            },
          },
        });

      if (temporaryDiscounts.length == 0) {
        return { fixedDiscount: 0, discount: 0, type: "FIXED" };
      }

      for (let i = 0; i < temporaryDiscounts.length; i++) {
        const temporaryDiscount = temporaryDiscounts[i];
        const targetTime = startDatetime.getTime();
        const startOfDiscountPeriod = new Date(
          temporaryDiscount.startDatetime
        ).getTime();
        const endOfDiscountPeriod = new Date(
          temporaryDiscount.endDatetime
        ).getTime();

        console.log("startOfDiscountPeriod", temporaryDiscount.startDatetime);
        console.log("endOfDiscountPeriod", temporaryDiscount.endDatetime);
        console.log("startDatetime", startDatetime);

        const isStartDatetimeWithinThePeriod =
          startOfDiscountPeriod <= targetTime &&
          targetTime <= endOfDiscountPeriod;

        if (
          !isStartDatetimeWithinThePeriod &&
          i + 1 < temporaryDiscounts.length
        ) {
          continue;
        } else if (
          !isStartDatetimeWithinThePeriod &&
          i + 1 == temporaryDiscounts.length
        ) {
          return { fixedDiscount: 0, discount: 0, type: "FIXED" };
        }

        const carGroup = await strapi
          .query("api::car-group.car-group")
          .findOne({
            where: {
              id: carGroupId,
              userGroup,
            },
            populate: {
              prices: {
                select: ["minDays", "amount", "isFixed"],
              },
            },
          });
        const days = getDays(startDatetime, endDatetime);
        const price = getLatestPriceColumn(carGroup, days);
        let fixedDiscount = 0;
        switch (temporaryDiscount.discount.type) {
          case "FIXED":
            fixedDiscount = temporaryDiscount.discount.amount;
            break;
          case "PER_DAY":
            fixedDiscount = temporaryDiscount.discount.amount * days;
            break;
          case "PERCENTAGE":
            fixedDiscount = (price * temporaryDiscount.discount.amount) / 100;
            break;
        }
        const response = {
          fixedDiscount,
          discount: temporaryDiscount.discount.amount,
          type: temporaryDiscount.discount.type,
        };
        if (fixedDiscount > 0) {
          return response;
        } else {
          return { fixedDiscount: 0, discount: 0, type: "FIXED" };
        }
      }
    },
  })
);
