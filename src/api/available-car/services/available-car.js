"use strict";

/**
 * get-available-cars service
 */

module.exports = () => ({
  availableCar: async (subdomain, startDatetime, endDatetime, carType) => {
    const diffTime = Math.abs(endDatetime - startDatetime);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const loggedUserUserGroup = await strapi
      .query("plugin::multi-tenant.user-group")
      .findOne({
        where: {
          name: { $eq: subdomain },
        },
      });

    let carFilter = {
      userGroup: loggedUserUserGroup.id,
    };
    if (carType != null) {
      carFilter = {
        ...carFilter,
        cars: {
          carType: {
            $containsi: carType || null,
          },
        },
      };
    }

    const carGroups = await strapi.db
      .query("api::car-group.car-group")
      .findMany({
        select: ["id", "name"],
        populate: {
          prices: {
            select: ["minDays", "amount"],
          },
          cars: {
            select: [
              "id",
              "transmissionType",
              "fuelType",
              "carType",
              "doors",
              "seats",
              "isAvailable",
              "discount",
            ],
            populate: {
              thumbnail: {
                select: ["url"],
              },
            },
          },
        },
        where: carFilter,
      });
    const epicEventQuery = {
      $or: [
        {
          $and: [
            {
              startDatetime: {
                $gte: startDatetime,
                $lte: endDatetime,
              },
              endDatetime: {
                $gte: endDatetime,
              },
            },
          ],
        },
        {
          $and: [
            {
              endDatetime: {
                $gte: startDatetime,
                $lte: endDatetime,
              },
              startDatetime: {
                $lte: endDatetime,
              },
            },
          ],
        },
        {
          $and: [
            {
              startDatetime: {
                $lte: startDatetime,
                $lte: endDatetime,
              },
              endDatetime: {
                $gte: endDatetime,
                $gte: startDatetime,
              },
            },
          ],
        },
      ],
    };
    const carContracts = await strapi.db
      .query("api::car-contract.car-contract")
      .findMany({
        select: ["id", "startDatetime", "endDatetime"],
        populate: {
          car: {
            select: ["id"],
          },
        },
        where: epicEventQuery,
      });
    const carReservations = await strapi.db
      .query("api::car-reservation.car-reservation")
      .findMany({
        select: ["id", "startDatetime", "endDatetime"],
        populate: {
          car: {
            select: ["id"],
          },
        },
        where: epicEventQuery,
      });
    const carMaintenances = await strapi.db
      .query("api::car-maintenance.car-maintenance")
      .findMany({
        select: ["id", "startDatetime", "endDatetime"],
        populate: {
          car: {
            select: ["id"],
          },
        },
        where: epicEventQuery,
      });
    const busyCarIds = [
      ...carContracts,
      ...carReservations,
      ...carMaintenances,
    ].map((event) => event.car.id);
    const uniqueBusyCarIds = [...new Set(busyCarIds)];
    // filter out vehicles that are busy!
    carGroups.forEach((carGroup) => {
      carGroup.cars = carGroup.cars.filter(
        (car) => !uniqueBusyCarIds.includes(car.id) && car.isAvailable
      );
    });
    let availableCarGroups = carGroups.filter(
      (carGroup) => carGroup.cars.length > 0
    );
    // calculate the vehicle prices!!
    availableCarGroups = availableCarGroups.map((carGroup) => {
      let price = null;
      if (carGroup.prices.length > 0) {
        let closestPriceColumn = carGroup.prices.reduce((prev, curr) =>
          Math.abs(curr.minDays - days) < Math.abs(prev.minDays - days)
            ? curr
            : prev
        );
        price =
          carGroup.prices.find(
            (price) => closestPriceColumn.minDays === price.minDays
          ).amount * days;
      }
      // we don't need to show the client the entire price column
      delete carGroup.prices;
      return {
        ...carGroup,
        price,
        // we don't need to show it if the cars related to the car group are available...
        cars: carGroup.cars.map(({ isAvailable, ...car }) => car),
      };
    });
    // fixme: tokom rentanja, ili tokom narudzbe?
    // pripremi konstantu koja zna da li je datum pocetka naruzbe zimski period?
    const m = startDatetime.getMonth();
    const isWinter =
      m == 11
        ? startDatetime.getDate() >= 21
        : m == 2
        ? startDatetime.getDate() < 21
        : m < 2;
    // only return each group's first car child!
    const response = availableCarGroups.map((carGroup) => {
      const discount = isWinter ? carGroup.cars[0].discount : 0;
      return {
        name: carGroup.name,
        priceOriginal: carGroup.price,
        priceWithModification: carGroup.price - (carGroup.price * discount / 100),
        // add discount if it's during winter
        discount,
        ...carGroup.cars[0],
      };
    });
    console.log("response", response);
    return response;
  },
});
