"use strict";
const {
  getUserGroupId,
} = require("../../../shared/functions/get-logged-user-user-group");
const moment = require("moment");
const PDFDocument = require("pdfkit");
const axios = require("axios");

/**
 * A set of functions called "actions" for `pdf`
 */

module.exports = {
  getBookingConfirmationPdf: async (ctx, next) => {
    try {
      const userGroup = await getUserGroupId(strapi, ctx.request);
      const code = ctx.request.params.code;

      const organisationDetail = await strapi.db
        .query("api::organization-detail.organization-detail")
        .findOne({
          select: ["id", "organizationName", "organizationBrandName"],
          populate: {
            contact: {
              select: [
                "email",
                "telephonePrimary",
                "telephoneSecondary",
                "website",
              ],
            },
          },
          where: {
            userGroup,
          },
        });

      const carReservation = await strapi.db
        .query("api::car-reservation.car-reservation")
        .findOne({
          select: ["id", "createdAt"],
          populate: {
            car: {
              select: ["id", "registrationPlate", "make", "model"],
            },
            agreementDetail: {
              select: ["startDatetime", "endDatetime"],
            },
            rentalAgreementDetail: {
              select: ["startLocation", "endLocation"],
              populate: {
                renter: {
                  select: ["name"],
                },
              },
            },
            transaction: {
              select: [
                "totalWithTax",
                "deposit",
                "discount",
                "additionalCost",
                "extrasPrice",
                "pricePerDay",
                "days",
              ],
            },
          },
          where: {
            code,
            userGroup,
          },
        });

      // Format the dates
      const formattedCreatedAt = moment(carReservation.createdAt).format(
        "DD.MM.YYYY. HH:mm:ss"
      );
      const formattedStartDate = moment(
        carReservation.agreementDetail.startDatetime
      ).format("DD.MM.YYYY. HH:mm");
      const formattedEndDate = moment(
        carReservation.agreementDetail.endDatetime
      ).format("DD.MM.YYYY. HH:mm");

      // Format the prices
      const formattedExtrasPrice = `${carReservation.transaction.extrasPrice.toFixed(
        2
      )} BAM / ${(carReservation.transaction.extrasPrice / 1.93).toFixed(2)} €`;
      const formattedCarPrice = `${(
        carReservation.transaction.pricePerDay * carReservation.transaction.days
      ).toFixed(2)} BAM / ${(
        (carReservation.transaction.pricePerDay *
          carReservation.transaction.days) /
        1.93
      ).toFixed(2)} €`;
      const formattedDiscount = `${carReservation.transaction.discount.toFixed(
        2
      )} BAM / ${(carReservation.transaction.discount / 1.93).toFixed(2)} €`;
      const formattedAdditionalCost = `${carReservation.transaction.additionalCost.toFixed(
        2
      )} BAM / ${(carReservation.transaction.additionalCost / 1.93).toFixed(
        2
      )} €`;
      const formattedTotalRentPrice = `${carReservation.transaction.totalWithTax.toFixed(
        2
      )} BAM / ${(carReservation.transaction.totalWithTax / 1.93).toFixed(2)} €`;
      const formattedDeposit = `${carReservation.transaction.deposit.toFixed(
        2
      )} BAM / ${(carReservation.transaction.deposit / 2).toFixed(2)} €`;

      // Create a new PDF document
      const doc = new PDFDocument({ size: "A4", margin: 20 });

      // Add a header
      const response = await axios.get(
        "https://res.cloudinary.com/dbwmyma6c/image/upload/v1683199011/gt_logo_8b9af8e585.png",
        { responseType: "arraybuffer" }
      );

      const imageBuffer = Buffer.from(response.data, "binary");

      doc.image(imageBuffer, 20, doc.y, { height: 70 });
      doc
        .fontSize(10)
        .text(
          `Booking date: ${formattedCreatedAt}`,
          doc.page.width - 200,
          doc.y + 60,
          {
            lineGap: 0,
            align: "right",
          }
        );
      // Add a horizontal line
      doc
        .moveTo(20, doc.y + 5)
        .lineTo(575, doc.y + 5)
        .strokeColor("#808080")
        .stroke()
        .strokeColor("#808080");

      doc
        .fontSize(28)
        .text(`Booking confirmation`, 20, doc.y + 75, {
          lineGap: 12,
          oblique: true,
        })
        .moveDown(1);

      // Add the rest of the rows
      const rows = [
        {
          label: "Renter's full name",
          value: carReservation.rentalAgreementDetail.renter.name,
        },
        // fixme: what about grouped cars??
        {
          label: "Car name",
          value: `${carReservation.car.make} ${
            carReservation.car.model
          } (${carReservation.car.registrationPlate.slice(-3)})`,
        },
        { label: "Start datetime", value: formattedStartDate },
        {
          label: "Start location",
          value: carReservation.rentalAgreementDetail.startLocation,
        },
        { label: "End datetime", value: formattedEndDate },
        {
          label: "End location",
          value: carReservation.rentalAgreementDetail.endLocation,
        },
        { label: "Number of days", value: carReservation.transaction.days },
        { label: "Car price", value: formattedCarPrice },
        {
          label: "Discount",
          value: formattedDiscount,
          hide: carReservation.transaction.discount === 0,
        },
        {
          label: "Extras price",
          value: formattedExtrasPrice,
          hide: carReservation.transaction.extrasPrice === 0,
        },
        {
          label: "Additional Cost",
          value: formattedAdditionalCost,
          hide: carReservation.transaction.additionalCost === 0,
        },
        { label: "Total rent price", value: formattedTotalRentPrice },
        { label: "Deposit", value: formattedDeposit },
      ];

      rows.forEach((row) => {
        if (row.hide) {
          return;
        }
        doc.font("Helvetica-Bold").fontSize(14).text(row.label, 20, doc.y, {
          lineGap: 12,
        });
        doc.font("Helvetica").text(row.value, 200, doc.y - 28, {
          lineGap: 12,
        });
        doc
          .moveTo(20, doc.y - 8)
          .lineTo(575, doc.y - 8)
          .stroke()
          .strokeColor("#808080");
      });
      doc.moveDown(3);

      // Add extra information section
      doc
        .font("Helvetica-Bold")
        .fontSize(14)
        .text("Free", 20, doc.y, {
          continued: true,
          lineGap: 15,
        })
        .font("Helvetica")
        .text(" cancellation up to 48 hours before vehicle pickup.", {
          lineGap: 15,
        });
      doc
        .fontSize(14)
        .text(`Thank you for choosing `, 20, doc.y, {
          lineGap: 15,
          continued: true,
        })
        .font("Helvetica-Bold")
        .text(`${organisationDetail.organizationBrandName}!`, {
          lineGap: 15,
        });
      doc
        .font("Helvetica")
        .fontSize(14)
        .text(`We expect your arrival!`, 20, doc.y, { lineGap: 15 });

      // Add a footer
      doc
        .moveTo(20, doc.page.height - 50)
        .lineTo(575, doc.page.height - 50)
        .stroke();
      doc
        .fontSize(10)
        .text(
          `Email: ${organisationDetail.contact.email}`,
          20,
          doc.page.height - 40,
          {
            align: "left",
          }
        );
      doc
        .fontSize(10)
        .text(
          `Telephone: ${organisationDetail.contact.telephonePrimary}`,
          doc.page.width - 200,
          doc.page.height - 40,
          {
            align: "right",
          }
        );

      return new Promise((resolve, reject) => {
        const chunks = [];
        doc.on("data", (chunk) => chunks.push(chunk));
        doc.on("end", () => {
          const pdfData = Buffer.concat(chunks);
          resolve(pdfData);
        });
        doc.on("error", (err) => {
          reject(err);
        });
        doc.end();
      });
    } catch (err) {
      ctx.body = err;
    }
  },
};
