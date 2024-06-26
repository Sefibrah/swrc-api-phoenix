"use strict";

const { getRandomString } = require("../../../shared/functions/get-random-string");

/**
 * system service
 */

module.exports = ({ strapi }) => ({
  createCarReservation: async (
    { car, flightNumber, status, code, source },
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
      includeTimeAsExtraDay,
      days,
    },
    rentalExtras,
    query,
    userGroup
  ) => {
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
          includeTimeAsExtraDay,
          extrasPrice,
          userGroup,
        },
      }
    );

    let rentalExtraIds = [];
    console.log("rentalExtras", rentalExtras);
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
          source,
          code: getRandomString(),
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

  updateCarReservation: async (
    id,
    reservation,
    rentalAgreementDetail,
    agreementDetail,
    transaction,
    rentalExtras,
    query,
    userGroup
  ) => {
    const reservationToUpdate = await strapi
      .query("api::car-reservation.car-reservation")
      .findOne({
        where: {
          id,
          userGroup,
        },
        populate: {
          transaction: {
            fields: [
              "days",
              "totalWithTax",
              "totalWithoutTax",
              "additionalCost",
              "tax",
              "deposit",
              "discount",
              "discountType",
              "extrasPrice",
              "pricePerDay",
              "totalPricePerDay",
            ],
          },
          agreementDetail: {
            fields: ["startDatetime", "endDatetime", "comment", "author"],
          },
          rentalExtras: {
            fields: ["id", "quantity"],
            populate: {
              extra: {
                populate: {
                  thumbnail: {
                    fields: ["url"],
                  },
                },
                fields: ["id", "name", "price", "quantity"],
              },
            },
          },
          rentalAgreementDetail: {
            fields: ["startLocation", "endLocation"],
            populate: {
              renter: {
                fields: ["name"],
                populate: {
                  contact: {
                    fields: ["email", "telephonePrimary", "telephoneSecondary"],
                  },
                  individual: {
                    populate: {},
                    documents: {
                      fields: [
                        "id",
                        "number",
                        "issuedBy",
                        "expiry",
                        "unlimited",
                      ],
                    },
                  },
                  organisation: {
                    fields: ["*"],
                  },
                },
              },
            },
          },
          car: {
            fields: ["registrationPlate"],
            populate: {
              carGroup: {
                fields: ["id"],
                populate: {
                  prices: {
                    fields: ["minDays", "amount", "isFixed"],
                  },
                  inspectionImages: {
                    fields: ["url"],
                  },
                },
              },
            },
          },
        },
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
          includeTimeAsExtraDay: transaction.includeTimeAsExtraDay,
          totalWithoutTax,
          extrasPrice: transaction.extrasPrice,
          userGroup,
        },
      }
    );

    let rentalExtraIds = [];

    for (let i = 0; i < rentalExtras.length; i++) {
      const rentalExtra = rentalExtras[i];
      const index = reservationToUpdate.rentalExtras.findIndex(
        (rE) => rE.extra.id == rentalExtra.extra
      );
      if (index > -1) {
        const existingRentalExtraId = reservationToUpdate.rentalExtras[i].id;
        await strapi.entityService.update(
          "api::rental-extra.rental-extra",
          existingRentalExtraId,
          {
            data: {
              quantity: rentalExtra.quantity,
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
        rentalExtraIds.push(rentalExtraFromDb.id);
      }
    }

    console.log("rentalExtraIds", rentalExtraIds);

    return await strapi.entityService.update(
      "api::car-reservation.car-reservation",
      id,
      {
        data: {
          car: reservation.car,
          flightNumber: reservation.flightNumber,
          status: reservation.status,
          source: reservation.source,
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

  deleteCarReservation: async (id, userGroup) => {
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

    if (reservationToDelete?.agreementDetail?.id != null) {
      await strapi.entityService.delete(
        "api::agreement-detail.agreement-detail",
        reservationToDelete.agreementDetail.id
      );
    }

    if (reservationToDelete?.rentalAgreementDetail?.id != null) {
      await strapi.entityService.delete(
        "api::rental-agreement-detail.rental-agreement-detail",
        reservationToDelete.rentalAgreementDetail.id
      );
    }

    if (reservationToDelete?.transaction?.id != null) {
      await strapi.entityService.delete(
        "api::transaction.transaction",
        reservationToDelete.transaction.id
      );
    }

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
