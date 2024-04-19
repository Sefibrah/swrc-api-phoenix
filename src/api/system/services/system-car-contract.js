"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

/**
 * system service
 */

module.exports = ({ strapi }) => ({
  createCarContract: async (
    { car, primaryDriver, secondaryDriver, addressOfStay },
    { startLocation, endLocation, renter },
    { startDatetime, endDatetime, comment, author },
    {
      discount,
      discountType,
      additionalCost,
      deposit,
      paymentMethod,
      totalWithTax,
      totalPricePerDay,
      days,
      extrasPrice,
      pricePerDay,
      includeTimeAsExtraDay,
    },
    rentalExtras,
    query,
    userGroup
  ) => {
    const primaryDriverFromDb = await strapi
      .query("api::customer.customer")
      .findOne({
        where: {
          id: primaryDriver,
          userGroup,
        },
        populate: {
          individual: {
            populate: ["documents"],
          },
        },
      });

    const arePrimaryDocsValid = checkDriverDocuments(
      primaryDriverFromDb,
      true,
      endDatetime
    );

    if (typeof arePrimaryDocsValid == "string") {
      return new NotFoundError(arePrimaryDocsValid);
    }

    const primaryDriverDocumentVersions = await strapi.entityService.create(
      "api::document-connection.document-connection",
      {
        data: {
          ...getDocumentIds(primaryDriverFromDb.individual.documents),
          userGroup,
        },
      }
    );

    let secondaryDriverDocumentVersions = null;
    if (secondaryDriver != null) {
      const secondaryDriverFromDb = await strapi
        .query("api::customer.customer")
        .findOne({
          where: {
            id: secondaryDriver,
          },
          populate: {
            individual: {
              populate: ["documents"],
            },
          },
        });

      const areSecondaryDocsValid = checkDriverDocuments(
        secondaryDriverFromDb,
        false,
        endDatetime
      );

      if (typeof areSecondaryDocsValid == "string") {
        return new NotFoundError(areSecondaryDocsValid);
      }

      secondaryDriverDocumentVersions = await strapi.entityService.create(
        "api::document-connection.document-connection",
        {
          data: {
            ...getDocumentIds(secondaryDriverFromDb.individual.documents),
            userGroup,
          },
        }
      );
    }

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
          days,
          totalPricePerDay,
          tax,
          paymentMethod,
          totalWithoutTax,
          extrasPrice,
          includeTimeAsExtraDay,
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

    return await strapi.entityService.create("api::car-contract.car-contract", {
      data: {
        car,
        rentalAgreementDetail: rentalAgreementDetail.id,
        agreementDetail: agreementDetail.id,
        transaction: transaction.id,
        rentalExtras: rentalExtraIds,
        primaryDriver,
        secondaryDriver,
        primaryDriverDocumentVersions: primaryDriverDocumentVersions.id,
        secondaryDriverDocumentVersions: secondaryDriverDocumentVersions?.id,
        addressOfStay,
        userGroup,
      },
      ...query,
    });
  },
  updateCarContract: async (
    id,
    contract,
    rentalAgreementDetail,
    agreementDetail,
    transaction,
    rentalExtras,
    query,
    userGroup
  ) => {
    const contractToUpdate = await strapi
      .query("api::car-contract.car-contract")
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
              "paymentMethod",
              "extrasPrice",
              "pricePerDay",
              "totalPricePerDay",
            ],
          },
          invoice: {
            fields: ["id"],
          },
          agreementDetail: {
            fields: ["startDatetime", "endDatetime", "comment", "author"],
          },
          rentalExtras: {
            fields: ["quantity"],
            populate: {
              extra: {
                populate: {
                  thumbnail: {
                    fields: ["url"],
                  },
                },
                fields: ["name", "price", "quantity"],
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
          primaryDriver: {
            fields: ["name", "country"],
            populate: {
              contact: {
                fields: ["email", "telephonePrimary", "telephoneSecondary"],
              },
              individual: {
                populate: {},
                documents: {
                  fields: ["id", "number", "issuedBy", "expiry", "unlimited"],
                },
              },
            },
          },
          secondaryDriver: {
            fields: ["name", "country"],
            populate: {
              contact: {
                fields: ["email", "telephonePrimary", "telephoneSecondary"],
              },
              individual: {
                populate: {},
                documents: {
                  fields: ["id", "number", "issuedBy", "expiry", "unlimited"],
                },
              },
            },
          },
          primaryDriverDocumentVersions: {
            populate: ["passport", "identityLicence", "driverLicence"],
          },
          secondaryDriverDocumentVersions: {
            populate: ["passport", "identityLicence", "driverLicence"],
          },
        },
      });

    let primaryDriverDocumentVersions =
      contractToUpdate.primaryDriverDocumentVersions;
    if (contract.primaryDriver != contractToUpdate.primaryDriver?.id) {
      const primaryDriverFromDb = await strapi
        .query("api::customer.customer")
        .findOne({
          where: {
            id: contract.primaryDriver,
            userGroup,
          },
          populate: {
            individual: {
              populate: ["documents"],
            },
          },
        });

      const arePrimaryDocsValid = checkDriverDocuments(
        primaryDriverFromDb,
        true,
        agreementDetail.endDatetime
      );

      if (typeof arePrimaryDocsValid == "string") {
        return new NotFoundError(arePrimaryDocsValid);
      }

      primaryDriverDocumentVersions = await strapi.entityService.create(
        "api::document-connection.document-connection",
        {
          data: {
            ...getDocumentIds(primaryDriverFromDb.individual.documents),
            userGroup,
          },
        }
      );

      if (contractToUpdate?.primaryDriverDocumentVersions?.id != null) {
        await strapi.entityService.delete(
          "api::document-connection.document-connection",
          contractToUpdate?.primaryDriverDocumentVersions?.id
        );
      }
    }

    let secondaryDriverDocumentVersions =
      contractToUpdate?.secondaryDriverDocumentVersions;
    if (
      contract?.secondaryDriver != null &&
      contract?.secondaryDriver != contractToUpdate?.secondaryDriver?.id
    ) {
      const secondaryDriverFromDb = await strapi
        .query("api::customer.customer")
        .findOne({
          where: {
            id: contract?.secondaryDriver,
          },
          populate: {
            individual: {
              populate: ["documents"],
            },
          },
        });

      const areSecondaryDocsValid = checkDriverDocuments(
        secondaryDriverFromDb,
        false,
        agreementDetail.endDatetime
      );

      if (typeof areSecondaryDocsValid == "string") {
        return new NotFoundError(areSecondaryDocsValid);
      }

      secondaryDriverDocumentVersions = await strapi.entityService.create(
        "api::document-connection.document-connection",
        {
          data: {
            ...getDocumentIds(secondaryDriverFromDb.individual.documents),
            userGroup,
          },
        }
      );

      if (contractToUpdate?.secondaryDriverDocumentVersions?.id != null) {
        await strapi.entityService.delete(
          "api::document-connection.document-connection",
          contractToUpdate?.secondaryDriverDocumentVersions?.id
        );
      }
    }

    await strapi.entityService.update(
      "api::agreement-detail.agreement-detail",
      contractToUpdate.agreementDetail.id,
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
      contractToUpdate.rentalAgreementDetail.id,
      {
        data: {
          startLocation: rentalAgreementDetail.startLocation,
          endLocation: rentalAgreementDetail.endLocation,
          renter: rentalAgreementDetail.renter,
          userGroup,
        },
      }
    );

    const taxRate = 0.145299; // fixme: probably when going international this will need to be uplifted to the cloud
    const tax = transaction.totalWithTax * taxRate;
    const totalWithoutTax = transaction.totalWithTax - tax;
    await strapi.entityService.update(
      "api::transaction.transaction",
      contractToUpdate.transaction.id,
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
          includeTimeAsExtraDay: transaction.includeTimeAsExtraDay,
          userGroup,
        },
      }
    );

    let rentalExtraIds = [];

    for (let i = 0; i < rentalExtras.length; i++) {
      const rentalExtra = rentalExtras[i];
      const index = contractToUpdate.rentalExtras.findIndex(
        (rE) => rE.extra.id == rentalExtra.extra
      );
      if (index > -1) {
        const existingRentalExtraId = contractToUpdate.rentalExtras[i].id;
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

    return await strapi.entityService.update(
      "api::car-contract.car-contract",
      id,
      {
        data: {
          // code: reservation.code,
          rentalAgreementDetail: rentalAgreementDetail.id,
          agreementDetail: agreementDetail.id,
          transaction: transaction.id,
          rentalExtras: rentalExtraIds,
          primaryDriver: contract.primaryDriver,
          secondaryDriver: contract.secondaryDriver,
          primaryDriverDocumentVersions: primaryDriverDocumentVersions?.id,
          secondaryDriverDocumentVersions: secondaryDriverDocumentVersions?.id,
          addressOfStay: contract.addressOfStay,
          userGroup,
        },
        ...query,
      }
    );
  },
  deleteCarContract: async (id, userGroup) => {
    const contractToDelete = await strapi
      .query("api::car-contract.car-contract")
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
          "primaryDriverDocumentVersions",
          "secondaryDriverDocumentVersions",
        ],
      });

    await strapi.entityService.delete(
      "api::agreement-detail.agreement-detail",
      contractToDelete.agreementDetail.id
    );

    await strapi.entityService.delete(
      "api::rental-agreement-detail.rental-agreement-detail",
      contractToDelete.rentalAgreementDetail.id
    );

    await strapi.entityService.delete(
      "api::transaction.transaction",
      contractToDelete.transaction.id
    );

    contractToDelete.rentalExtras.forEach(async (rentalExtra) => {
      await strapi.entityService.delete(
        "api::rental-extra.rental-extra",
        rentalExtra.id
      );
    });

    await strapi.entityService.delete(
      "api::document-connection.document-connection",
      contractToDelete.primaryDriverDocumentVersions.id
    );

    if (contractToDelete.secondaryDriverDocumentVersions != null) {
      await strapi.entityService.delete(
        "api::document-connection.document-connection",
        contractToDelete.secondaryDriverDocumentVersions.id
      );
    }

    return await strapi.entityService.delete(
      "api::car-contract.car-contract",
      id
    );
  },
});

function checkDriverDocuments(driver, isPrimary, endDatetime) {
  const messagePrefix = isPrimary ? "PRIMARY" : "SECONDARY";
  const DDocuments = driver?.individual?.documents;
  if (DDocuments == null || DDocuments?.length === 0) {
    return `${messagePrefix}_DRIVER_HAS_NO_DOCUMENTS`;
  }
  const DHasDriverLicense =
    DDocuments?.sort(
      (a, b) => new Date(b.expiry).getTime() - new Date(a.expiry).getTime()
    )
      .filter((doc) => doc.type === "DRIVING")
      .find(
        (doc) =>
          new Date(doc.expiry).getTime() > new Date(endDatetime).getTime()
      ) || null;
  if (DHasDriverLicense == null) {
    return `${messagePrefix}_DRIVER_HAS_NO_DRIVER_LICENSE`;
  }
  const DHasValidID =
    DDocuments?.sort(
      (a, b) => new Date(b.expiry).getTime() - new Date(a.expiry).getTime()
    )
      .filter((doc) => doc.type === "IDENTITY" || doc.type === "PASSPORT")
      .find(
        (doc) =>
          new Date(doc.expiry).getTime() > new Date(endDatetime).getTime()
      ) || null;
  if (DHasValidID == null) {
    return `${messagePrefix}_DRIVER_HAS_NO_ID`;
  }
  return true;
}

function getDocumentIds(documents) {
  const passport = documents.find((doc) => doc.type == "PASSPORT")?.id;
  const identityLicense = documents.find((doc) => doc.type == "IDENTITY")?.id;
  const driverLicense = documents.find((doc) => doc.type == "DRIVING")?.id;
  return { passport, identityLicense, driverLicense };
}
