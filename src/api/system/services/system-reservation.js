"use strict";

/**
 * system service
 */

module.exports = ({ strapi }) => ({
  createFullReservationFromSystem: async (
    { car, flightNumber, status, code },
    { startLocation, endLocation, renter },
    { startDatetime, endDatetime, comment, author },
    {
      discount,
      discountType,
      additionalCost,
      deposit,
      paymentMethod,
      totalWithTax,
      extrasPrice,
      pricePerDay,
      totalPricePerDay,
      days,
    },
    rentalExtras,
    query,
    subdomain
  ) => {
    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });
    const userGroup = loggedUserUserGroup.id;

    const agreementDetail = await strapi.entityService.create(
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

    const rentalAgreementDetail = await strapi.entityService.create(
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

    const taxRate = 0.145299; // fixme: probably when going international this will need to be uplifted to the cloud
    const tax = totalWithTax * taxRate;
    const totalWithoutTax = totalWithTax - tax;
    const transaction = await strapi.entityService.create(
      "api::transaction.transaction",
      {
        data: {
          totalWithTax,
          deposit,
          discount,
          discountType,
          additionalCost,
          pricePerDay,
          totalPricePerDay,
          days,
          tax,
          paymentMethod,
          totalWithoutTax,
          extrasPrice,
          userGroup,
        },
      }
    );

    let rentalExtraIds = [];
    rentalExtras.forEach(async (rentalExtra) => {
      const rentalExtraFromDb = await strapi.entityService.create(
        "api::rental-extra.rental-extra",
        {
          data: {
            quantity: rentalExtra.quantity,
            extra: rentalExtra.extra,
            userGroup,
          },
        }
      );
      rentalExtraIds.push(rentalExtraFromDb.id);
    });

    return await strapi.entityService.create(
      "api::car-reservation.car-reservation",
      {
        data: {
          car,
          flightNumber,
          status,
          code,
          rentalAgreementDetail: rentalAgreementDetail.id,
          agreementDetail: agreementDetail.id,
          transaction: transaction.id,
          rentalExtras: rentalExtraIds,
          userGroup,
        },
        ...query,
      }
    );
  },

  updateFullReservationFromSystem: async (
    id,
    reservation,
    rentalAgreementDetail,
    agreementDetail,
    transaction,
    rentalExtras,
    query,
    subdomain
  ) => {
    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });
    const userGroup = loggedUserUserGroup.id;

    const reservationToUpdate = await strapi
      .query("api::car-reservation.car-reservation")
      .findOne({
        where: {
          id,
          userGroup,
        },
        populate: [
          "agreementDetail",
          "rentalAgreementDetail",
          "transaction",
          "rentalExtras",
        ],
      });

    await strapi.entityService.update(
      "api::agreement-detail.agreement-detail",
      reservationToUpdate.agreementDetail.id,
      {
        data: {
          comment: agreementDetail.comment,
          author: agreementDetail.author,
          startDatetime: agreementDetail.startDatetime,
          endDatetime: agreementDetail.endDatetime,
          userGroup,
        },
      }
    );

    await strapi.entityService.update(
      "api::rental-agreement-detail.rental-agreement-detail",
      reservationToUpdate.rentalAgreementDetail.id,
      {
        data: {
          renter: rentalAgreementDetail.renter,
          startLocation: rentalAgreementDetail.startLocation,
          endLocation: rentalAgreementDetail.endLocation,
          userGroup,
        },
      }
    );

    const taxRate = 0.145299; // fixme: probably when going international this will need to be uplifted to the cloud
    const tax = transaction.totalWithTax * taxRate;
    const totalWithoutTax = transaction.totalWithTax - tax;
    await strapi.entityService.update(
      "api::transaction.transaction",
      reservationToUpdate.transaction.id,
      {
        data: {
          totalWithTax: transaction.totalWithTax,
          deposit: transaction.deposit,
          discount: transaction.discount,
          discountType: transaction.discountType,
          additionalCost: transaction.additionalCost,
          pricePerDay: transaction.pricePerDay,
          totalPricePerDay: transaction.totalPricePerDay,
          days: transaction.days,
          tax,
          paymentMethod: transaction.paymentMethod,
          totalWithoutTax,
          extrasPrice: transaction.extrasPrice,
          userGroup,
        },
      }
    );

    let rentalExtraIds = [];
    console.log(
      "reservationToUpdate.rentalExtras",
      reservationToUpdate.rentalExtras
    );
    console.log("rentalExtras", rentalExtras);

    rentalExtras.forEach(async (rentalExtra) => {
      const i = reservationToUpdate.rentalExtras.findIndex(
        (rE) => rE.extra == rentalExtra.extra
      );
      console.log("index", i);
      console.log("rentalExtra", rentalExtra);
      if (i > -1) {
        const existingRentalExtraId = reservationToUpdate.rentalExtras[i].id;
        console.log("existingRentalExtraId", existingRentalExtraId);
        await strapi.entityService.update(
          "api::rental-extra.rental-extra",
          existingRentalExtraId,
          {
            data: {
              quantity: rentalExtra.quantity,
              extra: rentalExtra.extra,
              userGroup,
            },
          }
        );
        rentalExtraIds.push(existingRentalExtraId);
      } else {
        const rentalExtraFromDb = await strapi.entityService.create(
          "api::rental-extra.rental-extra",
          {
            data: {
              quantity: rentalExtra.quantity,
              extra: rentalExtra.extra,
              userGroup,
            },
          }
        );
        console.log("rentalExtraFromDb", rentalExtraFromDb);
        rentalExtraIds.push(rentalExtraFromDb.id);
      }
    });
    console.log("rentalExtraIds", rentalExtraIds);

    return await strapi.entityService.update(
      "api::car-reservation.car-reservation",
      id,
      {
        data: {
          car: reservation.car,
          flightNumber: reservation.flightNumber,
          status: reservation.status,
          code: reservation.code,
          rentalAgreementDetail: rentalAgreementDetail.id,
          agreementDetail: agreementDetail.id,
          transaction: transaction.id,
          rentalExtras: rentalExtraIds,
          userGroup,
        },
        ...query,
      }
    );
  },

  deleteFullReservationFromSystem: async (id, subdomain) => {
    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });
    const userGroup = loggedUserUserGroup.id;

    const reservationToDelete = await strapi
      .query("api::car-reservation.car-reservation")
      .findOne({
        where: {
          id,
          userGroup,
        },
        populate: [
          "agreementDetail",
          "rentalAgreementDetail",
          "transaction",
          "rentalExtras",
        ],
      });

    console.log("reservationToDelete", reservationToDelete);

    await strapi.entityService.delete(
      "api::agreement-detail.agreement-detail",
      reservationToDelete.agreementDetail.id
    );

    await strapi.entityService.delete(
      "api::rental-agreement-detail.rental-agreement-detail",
      reservationToDelete.rentalAgreementDetail.id
    );

    await strapi.entityService.delete(
      "api::transaction.transaction",
      reservationToDelete.transaction.id
    );

    reservationToDelete.rentalExtras.forEach(async (rentalExtra) => {
      await strapi.entityService.delete(
        "api::rental-extra.rental-extra",
        rentalExtra.id
      );
    });

    return await strapi.entityService.delete(
      "api::car-reservation.car-reservation",
      id
    );
  },
});
