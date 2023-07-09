"use strict";

/**
 * consumer service
 */

module.exports = ({ strapi }) => ({
  createFullReservationFromConsumer: async (
    comment,
    author,
    startDatetime,
    endDatetime,
    renter,
    startLocation,
    endLocation,
    rentalExtras,
    totalWithTax,
    deposit,
    discount,
    extrasPrice,
    flightNumber,
    car,
    userGroup,
    code
  ) => {
    let agreementDetail = await strapi.entityService.create(
      "api::agreement-detail.agreement-detail",
      {
        data: {
          comment,
          author,
          startDatetime,
          endDatetime,
          userGroup,
        },
      }
    );
    let rentalAgreementDetail = await strapi.entityService.create(
      "api::rental-agreement-detail.rental-agreement-detail",
      {
        data: {
          renter,
          startLocation,
          endLocation,
          userGroup,
        },
      }
    );
    let taxRate = 0.17; // probably when going international this will need to be uplifted to the cloud
    let tax = totalWithTax * taxRate;
    let totalWithoutTax = totalWithTax - tax;
    let transaction = await strapi.entityService.create(
      "api::transaction.transaction",
      {
        data: {
          totalWithTax,
          deposit,
          discount,
          discountType: "FIXED", // FIXED = 0, PER_DAY = 1, PERCENTAGE = 2, fixme: now it's hardcoded, before the packages update...
          additionalCost: 0,
          tax,
          paymentMethod: "CASH", // fixme: for now it's hardcoded, right?
          totalWithoutTax,
          extrasPrice,
          userGroup,
        },
      }
    );
    return await strapi.entityService.create(
      "api::car-reservation.car-reservation",
      {
        data: {
          flightNumber,
          code,
          car,
          rentalExtras,
          rentalAgreementDetail: rentalAgreementDetail.id,
          transaction: transaction.id,
          agreementDetail: agreementDetail.id,
          userGroup,
        },
      }
    );
  },
});
