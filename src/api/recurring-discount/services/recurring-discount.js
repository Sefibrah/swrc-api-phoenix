"use strict";
const {
  getLoggedUserUserGroup,
} = require("../../../shared/functions/get-logged-user-user-group");
const { getDays } = require("../../../shared/functions/get-days");
const {
  getLatestPriceColumn,
} = require("../../../shared/functions/get-latest-price-column");

/**
 * recurring-discount service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::recurring-discount.recurring-discount",
  ({ strapi }) => ({
    doesCarGroupHaveDiscountInGivenPeriod: async (
      carGroupId,
      startDatetime,
      endDatetime,
      subdomain
    ) => {
      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );
      const userGroup = loggedUserUserGroup.id;
      const recurringDiscounts = await strapi
        .query("api::recurring-discount.recurring-discount")
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
                fields: ["amount", "type"],
                carGroups: {
                  populate: {
                    fields: ["id"],
                  },
                },
              },
            },
          },
        });

      if (recurringDiscounts?.length == 0) {
        return { fixedDiscount: 0, discount: 0, type: "FIXED" };
      }

      for (let i = 0; i < recurringDiscounts.length; i++) {
        const recurringDiscount = recurringDiscounts[i];

        const startDatetimeMonth = new Date(startDatetime).getMonth() + 1;

        let startDateFromRecurringDiscount = null;
        let endDateFromRecurringDiscount = null;

        const isCrossYear =
          recurringDiscount.startMonth > recurringDiscount.endMonth;

        if (
          ((startDatetimeMonth <= recurringDiscount.startMonth &&
            startDatetimeMonth <= recurringDiscount.endMonth) ||
            (startDatetimeMonth >= recurringDiscount.startMonth &&
              startDatetimeMonth >= recurringDiscount.endMonth) ||
            (startDatetimeMonth >= recurringDiscount.startMonth &&
              startDatetimeMonth <= recurringDiscount.endMonth)) &&
          !isCrossYear
        ) {
          startDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear(),
            recurringDiscount.startMonth - 1,
            recurringDiscount.startDay
          );
          endDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear(),
            recurringDiscount.endMonth - 1,
            recurringDiscount.endDay
          );
        } else if (
          startDatetimeMonth >= recurringDiscount.startMonth &&
          startDatetimeMonth <= recurringDiscount.endMonth &&
          isCrossYear
        ) {
          startDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear(),
            recurringDiscount.startMonth - 1,
            recurringDiscount.startDay
          );
          endDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear() + 1,
            recurringDiscount.endMonth - 1,
            recurringDiscount.endDay
          );
        } else if (
          startDatetimeMonth <= recurringDiscount.startMonth &&
          startDatetimeMonth <= recurringDiscount.endMonth &&
          isCrossYear
        ) {
          startDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear() - 1,
            recurringDiscount.startMonth - 1,
            recurringDiscount.startDay
          );
          endDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear(),
            recurringDiscount.endMonth - 1,
            recurringDiscount.endDay
          );
        } else if (
          startDatetimeMonth >= recurringDiscount.startMonth &&
          startDatetimeMonth >= recurringDiscount.endMonth &&
          isCrossYear
        ) {
          startDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear(),
            recurringDiscount.startMonth - 1,
            recurringDiscount.startDay
          );
          endDateFromRecurringDiscount = new Date(
            new Date(startDatetime).getFullYear() + 1,
            recurringDiscount.endMonth - 1,
            recurringDiscount.endDay
          );
        }

        const targetTime = startDatetime.getTime();
        const startOfDiscountPeriod = startDateFromRecurringDiscount.getTime();
        const endOfDiscountPeriod = endDateFromRecurringDiscount.getTime();

        const isStartDatetimeWithinThePeriod =
          startOfDiscountPeriod <= targetTime &&
          targetTime <= endOfDiscountPeriod;

        if (
          !isStartDatetimeWithinThePeriod &&
          i + 1 < recurringDiscounts.length
        ) {
          continue;
        } else if (
          !isStartDatetimeWithinThePeriod &&
          i + 1 == recurringDiscounts.length
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
                select: ["minDays", "amount"],
              },
            },
          });
        const days = getDays(startDatetime, endDatetime);
        const price = getLatestPriceColumn(carGroup, days);
        let fixedDiscount = 0;
        switch (recurringDiscount.discount.type) {
          case "FIXED":
            fixedDiscount = recurringDiscount.discount.amount;
            break;
          case "PER_DAY":
            fixedDiscount = recurringDiscount.discount.amount * days;
            break;
          case "PERCENTAGE":
            fixedDiscount = (price * recurringDiscount.discount.amount) / 100;
            break;
        }
        const response = {
          fixedDiscount,
          discount: recurringDiscount.discount.amount,
          type: recurringDiscount.discount.type,
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
