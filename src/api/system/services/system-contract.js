"use strict";

const utils = require("@strapi/utils");
const { ApplicationError, ValidationError, NotFoundError } = utils.errors;

/**
 * system service
 */

module.exports = ({ strapi }) => ({
  createFullContractFromSystem: async (
    { car, primaryDriver, secondaryDriver },
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

    const arePrimaryDocsValid = checkDriverDocuments(primaryDriverFromDb, true);

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
        false
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

    const taxRate = 0.17; // fixme: probably when going international this will need to be uplifted to the cloud
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
        userGroup,
      },
      ...query,
    });
  },

  updateFullContractFromSystem: async (
    id,
    contract,
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

    const contractToUpdate = await strapi
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
        ],
      });

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

    const taxRate = 0.17; // fixme: probably when going international this will need to be uplifted to the cloud
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
          tax,
          paymentMethod: transaction.paymentMethod,
          totalWithoutTax,
          extrasPrice: transaction.extrasPrice,
          userGroup,
        },
      }
    );

    let rentalExtraIds = [];

    rentalExtras.forEach(async (rentalExtra) => {
      const i = contractToUpdate.rentalExtras.findIndex(
        (rE) => rE.extra == rentalExtra.extra
      );
      if (i > -1) {
        const existingRentalExtraId = contractToUpdate.rentalExtras[i].id;
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
        rentalExtraIds.push(rentalExtraFromDb.id);
      }
    });

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
          userGroup,
        },
        ...query,
      }
    );
  },

  deleteFullContractFromSystem: async (id, subdomain) => {
    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });
    const userGroup = loggedUserUserGroup.id;

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

function checkDriverDocuments(driver, isPrimary) {
  const messagePrefix = isPrimary ? "PRIMARY" : "SECONDARY";
  const DDocuments = driver?.individual?.documents;
  if (DDocuments == null || DDocuments?.length === 0) {
    return `${messagePrefix}_DRIVER_HAS_NO_DOCUMENTS`;
  }
  const DHasDriverLicense = DDocuments?.find(
    (doc) => doc.type === "DRIVING"
    // fixme: temporarily disabled because of import
    // &&
    // new Date(doc.expiry).getTime() > new Date().getTime()
  );
  if (DHasDriverLicense == null) {
    return `${messagePrefix}_DRIVER_HAS_NO_DRIVER_LICENSE`;
  }
  const DHasValidID = DDocuments?.find(
    (doc) => doc.type === "IDENTITY" || doc.type === "PASSPORT"
    // fixme: temporarily disabled because of import
    // &&
    // new Date(doc.expiry).getTime() > new Date().getTime()
  );
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