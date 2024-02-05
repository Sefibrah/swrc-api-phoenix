"use strict";
const { getRandomString } = require("../../../shared/functions/get-random-string");
const {
  getDateTimeFromObject,
} = require("../../../shared/functions/get-date-time-from-object");
const { getDays } = require("../../../shared/functions/get-days");
const { getSubdomainFromRequest } = require("../../../shared/functions/get-subdomain");
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");

/**
 * A set of functions called "actions" for `import`
 */

module.exports = {
  importContractFromGTRC: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      const contractData = {
        author: body.author,
        registrationPlate: body.registrationPlate,
        renter: {
          name: body.renterName,
          citizenId: body.renterCitizenId,
          telephonePrimary: body.renterPrimaryTelephone,
          telephoneSecondary: body.renterSecondaryTelephone,
          email: body.renterEmail,
          comment: body.renterComment,
        },
        primaryDriver: {
          name: body.primaryDriverName,
          dateOfBirth: body.primaryDriverDateOfBirth,
          citizenId: body.primaryDriverCitizenId,
          passportNumber: body.primaryDriverPassportNumber,
          passportIssuedBy: body.primaryDriverPassportIssuedBy,
          passportExpiry: body.primaryDriverPassportExpiry,
          drivingsLicenseNumber: body.primaryDriverDrivingsLicenseNumber,
          drivingsLicenseIssuedBy: body.primaryDriverDrivingsLicenseIssuedBy,
          drivingsLicenseExpiry: body.primaryDriverDrivingsLicenseExpiry,
          telephonePrimary: body.primaryDriverPrimaryTelephone,
          telephoneSecondary: body.primaryDriverSecondaryTelephone,
          email: body.primaryDriverEmail,
        },
        startDate: body.startDate,
        startTime: body.startTime,
        startLocation: body.startLocation,
        endDate: body.endDate,
        endTime: body.endTime,
        endLocation: body.endLocation,
        extras: body.extras,
        transaction: {
          extrasPrice: body.extrasPrice,
          discount: body.discount,
          totalDiscount: body.totalDiscount,
          additionalCost: body.additionalCost,
          perDayWithTax: body.perDayWithTax,
          days: body.days,
          tax: body.tax,
          totalWithoutTax: body.totalWithoutTax,
          deposit: body.deposit,
          totalWithTax: body.totalWithTax,
        },
        secondaryDriver: {
          name: body.secondaryDriverName,
          dateOfBirth: body.secondaryDriverDateOfBirth,
          citizenId: body.secondaryDriverCitizenId,
          passportNumber: body.secondaryDriverPassportNumber,
          passportIssuedBy: body.secondaryDriverPassportIssuedBy,
          passportExpiry: body.secondaryDriverPassportExpiry,
          drivingsLicenseNumber: body.secondaryDriverDrivingsLicenseNumber,
          drivingsLicenseIssuedBy: body.secondaryDriverDrivingsLicenseIssuedBy,
          drivingsLicenseExpiry: body.secondaryDriverDrivingsLicenseExpiry,
          telephonePrimary: body.secondaryDriverPrimaryTelephone,
          telephoneSecondary: body.secondaryDriverSecondaryTelephone,
          email: body.secondaryDriverEmail,
        },
      };

      const userGroup = await getUserGroupId(strapi, ctx.request);

      const startDateTime = getDateTimeFromObject(
        getDateTimeComponents(contractData.startDate, contractData.startTime)
      );

      const endDateTime = getDateTimeFromObject(
        getDateTimeComponents(contractData.endDate, contractData.endTime)
      );

      const carFromDb = await strapi.query("api::car.car").findOne({
        where: {
          userGroup,
          registrationPlate: contractData.registrationPlate,
        },
        select: ["id"],
      });

      // fixme: optimization possibility to not create unless there's a need to do so?
      const primaryDriverPassport = await strapi
        .service("api::document.document")
        .createPassport(userGroup, {
          number: contractData.primaryDriver.passportNumber,
          issuedBy: contractData.primaryDriver.passportIssuedBy,
          expiry: contractData.primaryDriver.passportExpiry,
        });
      const primaryDriverDrivingsLicense = await strapi
        .service("api::document.document")
        .createDrivingsLicense(userGroup, {
          number: contractData.primaryDriver.drivingsLicenseNumber,
          issuedBy: contractData.primaryDriver.drivingsLicenseIssuedBy,
          expiry: contractData.primaryDriver.drivingsLicenseExpiry,
        });

      let renterFromDb,
        primaryDriverFromDb,
        secondaryDriverFromDb = null;

      renterFromDb = await strapi.query("api::customer.customer").findOne({
        where: {
          userGroup,
          name: contractData.renter.name,
        },
        select: ["id", "name"],
      });
      if (contractData.renter.name == contractData.primaryDriver.name) {
        if (renterFromDb == null) {
          renterFromDb = await strapi
            .service("api::customer.customer")
            .createIndividualGuestCustomer(
              userGroup,
              {
                email: contractData.renter.email,
                telephonePrimary: contractData.renter.telephonePrimary,
                telephoneSecondary: contractData.renter.telephoneSecondary,
                website: null,
              },
              {
                civilNumber: contractData.renter.citizenId,
                dateOfBirth: contractData.primaryDriver.dateOfBirth,
                documents: [
                  primaryDriverPassport.id,
                  primaryDriverDrivingsLicense.id,
                ],
              },
              {
                name: contractData.renter.name,
                country: null,
                comment: `${contractData.renter.comment};imported from old software`,
                isLocal: false,
              }
            );
        }
        primaryDriverFromDb = renterFromDb;
      } else {
        if (renterFromDb == null) {
          renterFromDb = await strapi
            .service("api::customer.customer")
            .createIndividualGuestCustomer(
              userGroup,
              {
                email: contractData.renter.email,
                telephonePrimary: contractData.renter.telephonePrimary,
                telephoneSecondary: contractData.renter.telephoneSecondary,
                website: null,
              },
              {
                civilNumber: contractData.renter.citizenId,
                dateOfBirth: null,
                documents: [],
              },
              {
                name: contractData.renter.name,
                country: null,
                comment: `${contractData.renter.comment};imported from old software`,
                isLocal: false,
              }
            );
        }
        primaryDriverFromDb = await strapi
          .service("api::customer.customer")
          .createIndividualGuestCustomer(
            userGroup,
            {
              email: contractData.primaryDriver.email,
              telephonePrimary: contractData.primaryDriver.telephonePrimary,
              telephoneSecondary: contractData.primaryDriver.telephoneSecondary,
              website: null,
            },
            {
              civilNumber: contractData.primaryDriver.citizenId,
              dateOfBirth: contractData.primaryDriver.dateOfBirth,
              documents: [
                primaryDriverPassport.id,
                primaryDriverDrivingsLicense.id,
              ],
            },
            {
              name: contractData.primaryDriver.name,
              country: null,
              comment: `${contractData.primaryDriver.comment};imported from old software`,
              isLocal: false,
            }
          );
      }

      if (contractData.secondaryDriver.name != null) {
        secondaryDriverFromDb = await strapi
          .query("api::customer.customer")
          .findOne({
            where: {
              userGroup,
              name: contractData.secondaryDriver.name,
            },
            select: ["id", "name"],
          });
        if (secondaryDriverFromDb == null) {
          const secondaryDriverPassport = await strapi
            .service("api::document.document")
            .createPassport(userGroup, {
              number: contractData.secondaryDriver.passportNumber,
              issuedBy: contractData.secondaryDriver.passportIssuedBy,
              expiry: contractData.secondaryDriver.passportExpiry,
            });
          const secondaryDriverDrivingsLicense = await strapi
            .service("api::document.document")
            .createDrivingsLicense(userGroup, {
              number: contractData.secondaryDriver.drivingsLicenseNumber,
              issuedBy: contractData.secondaryDriver.drivingsLicenseIssuedBy,
              expiry: contractData.secondaryDriver.drivingsLicenseExpiry,
            });
          secondaryDriverFromDb = await strapi
            .service("api::customer.customer")
            .createIndividualGuestCustomer(
              userGroup,
              {
                email: contractData.secondaryDriver.email,
                telephonePrimary: contractData.secondaryDriver.telephonePrimary,
                telephoneSecondary:
                  contractData.secondaryDriver.telephoneSecondary,
                website: null,
              },
              {
                civilNumber: contractData.secondaryDriver.citizenId,
                dateOfBirth: contractData.secondaryDriver.dateOfBirth,
                documents: [
                  secondaryDriverPassport.id,
                  secondaryDriverDrivingsLicense.id,
                ],
              },
              {
                name: contractData.secondaryDriver.name,
                country: null,
                comment: `${contractData.secondaryDriver.comment};imported from old software`,
                isLocal: false,
              }
            );
        }
      }

      const { id, ...attributes } = await strapi
        .service("api::system.system-contract")
        .createFullContractFromSystem(
          {
            car: carFromDb.id,
            primaryDriver: primaryDriverFromDb.id,
            secondaryDriver:
              secondaryDriverFromDb != null ? secondaryDriverFromDb.id : null,
          },
          {
            startLocation: contractData.startLocation,
            endLocation: contractData.endLocation,
            renter: renterFromDb.id,
          },
          {
            startDatetime: startDateTime,
            endDatetime: endDateTime,
            comment: `${contractData.extras};imported from old software`,
            author: contractData.author,
          },
          {
            discount: contractData.transaction.discount,
            discountType: "FIXED",
            additionalCost: contractData.transaction.additionalCost,
            deposit: contractData.transaction.deposit,
            paymentMethod: "CASH",
            totalWithTax: contractData.transaction.totalWithTax,
            extrasPrice: contractData.transaction.extrasPrice,
            pricePerDay: contractData.transaction.perDayWithTax,
          },
          [],
          null,
          subdomain
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
  importReservationFromGTRC: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      const reservationData = {
        registrationPlate: body.registrationPlate,
        renter: {
          name: body.renterName,
          citizenId: body.renterCitizenId,
          telephonePrimary: body.renterPrimaryTelephone,
          telephoneSecondary: body.renterSecondaryTelephone,
          email: body.renterEmail,
          comment: body.renterComment,
        },
        startDate: body.startDate,
        startTime: body.startTime,
        startLocation: body.startLocation,
        endDate: body.endDate,
        endTime: body.endTime,
        endLocation: body.endLocation,
        flightNo: body.flightNo,
        comment: body.comment,
        extras: body.extras,
        deposit: body.deposit,
        totalWithTax: body.totalWithTax,
      };

      const userGroup = await getUserGroupId(strapi, ctx.request);

      const startDateTime = getDateTimeFromObject(
        getDateTimeComponents(
          reservationData.startDate,
          reservationData.startTime
        )
      );

      const endDateTime = getDateTimeFromObject(
        getDateTimeComponents(reservationData.endDate, reservationData.endTime)
      );

      const days = getDays(startDateTime, endDateTime);
      console.log("days", days);

      const carFromDb = await strapi.query("api::car.car").findOne({
        where: {
          userGroup,
          registrationPlate: reservationData.registrationPlate,
        },
        select: ["id"],
      });
      const code = getRandomString();

      let renterFromDb = await strapi.query("api::customer.customer").findOne({
        where: {
          userGroup,
          name: reservationData.renter.name,
        },
        select: ["id", "name"],
      });
      if (renterFromDb?.id == null) {
        renterFromDb = await strapi
          .service("api::customer.customer")
          .createIndividualGuestCustomer(
            userGroup,
            {
              email: reservationData.renter.email,
              telephonePrimary: reservationData.renter.telephonePrimary,
              telephoneSecondary: reservationData.renter.telephoneSecondary,
              website: null,
            },
            {
              civilNumber: reservationData.renter.citizenId,
              dateOfBirth: null,
              documents: null,
            },
            {
              name: reservationData.renter.name,
              country: null,
              comment: `${reservationData.renter.comment};imported from old system`,
              isLocal: false,
            }
          );
      }

      const comment = [
        reservationData.comment,
        reservationData.extras,
        'imported from old system'
      ]
        .filter((el) => el != null)
        .join(";");

      let pricePerDay = 0;
      if (days > 0) {
        pricePerDay = reservationData.totalWithTax / days;
      }

      const { id, ...attributes } = await strapi
        .service("api::system.system-reservation")
        .createFullReservationFromSystem(
          {
            car: carFromDb.id,
            flightNumber: reservationData.flightNo,
            status: "",
            code,
          },
          {
            startLocation: reservationData.startLocation,
            endLocation: reservationData.endLocation,
            renter: renterFromDb.id,
          },
          {
            startDatetime: startDateTime,
            endDatetime: endDateTime,
            comment,
            author: "imported",
          },
          {
            discount: 0,
            discountType: "FIXED",
            additionalCost: 0,
            deposit: reservationData.deposit,
            paymentMethod: "CASH",
            totalWithTax: reservationData.totalWithTax,
            extrasPrice: 0,
            pricePerDay,
          },
          [],
          null,
          subdomain
        );
      ctx.body = { data: { id, attributes } };
    } catch (err) {
      ctx.body = err;
    }
  },
};

function getDateTimeComponents(date, time) {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");
  return {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day),
    minute: parseInt(minutes),
    hour: parseInt(hours),
  };
}
