"use strict";

/**
 * get-available-cars service
 */

module.exports = () => ({
  availableCar: async (startDatetime, endDatetime, carType) => {
    const diffTime = Math.abs(endDatetime - startDatetime);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const carTypeFilter = {
      cars: {
        car_type: {
          $containsi: carType || null,
        },
      },
    };
    const carGroups = await strapi.db
      .query("api::car-group.car-group")
      .findMany({
        select: ["id", "name"],
        populate: {
          cars: {
            select: [
              "id",
              "transmission_type",
              "fuel_type",
              "car_type",
              "doors",
              "seats",
              "is_available",
              "discount",
            ],
            populate: {
              prices: {
                select: ["min_days", "amount"],
              },
              thumbnail: {
                select: ["url"],
              },
            },
          },
        },
        where: carType != null ? carTypeFilter : null,
      });
    const epicEventQuery = {
      $or: [
        {
          $and: [
            {
              start_datetime: {
                $gte: startDatetime,
                $lte: endDatetime,
              },
              end_datetime: {
                $gte: endDatetime,
              },
            },
          ],
        },
        {
          $and: [
            {
              end_datetime: {
                $gte: startDatetime,
                $lte: endDatetime,
              },
              start_datetime: {
                $lte: endDatetime,
              },
            },
          ],
        },
        {
          $and: [
            {
              start_datetime: {
                $lte: startDatetime,
                $lte: endDatetime,
              },
              end_datetime: {
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
        select: ["id", "start_datetime", "end_datetime"],
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
        select: ["id", "start_datetime", "end_datetime"],
        populate: {
          car: {
            select: ["id"],
          },
        },
        where: epicEventQuery,
      });
    const carMaintenances = await strapi.db
      .query("api::maintenance.maintenance")
      .findMany({
        select: ["id", "start_datetime", "end_datetime"],
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
        (car) => !uniqueBusyCarIds.includes(car.id) && car.is_available
      );
    });
    const availableCarGroups = carGroups.filter(
      (carGroup) => carGroup.cars.length > 0
    );
    // calculate the vehicle prices!!
    for (const carGroup of availableCarGroups) {
      for (const car of carGroup.cars) {
        if (car.prices.length > 0) {
          // Every car has a price catalog that consists of min_days & amount.
          // Find a price catalog column closest
          // to the amount of days the customer wants to reserve the car for,
          // and then calculate that base unit amount with the amount of days
          // to get the final price of the car
          let closestPriceColumn = car.prices.reduce((prev, curr) =>
            Math.abs(curr.min_days - days) < Math.abs(prev.min_days - days)
              ? curr
              : prev
          );
          car.price =
            car.prices.find(
              (price) => closestPriceColumn.min_days === price.min_days
            ).amount * days;
        } else {
          car.price = null;
        }
        delete car.prices;
        delete car.is_available;
      }
    }
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
    return availableCarGroups.map((carGroup) => ({
      name: carGroup.name,
      // add discount if it's during winter
      discount: isWinter ? carGroup.cars[0].discount : 0,
      ...carGroup.cars[0],
    }));
  },
});
