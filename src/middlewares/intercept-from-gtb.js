module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (
      ctx.request.method === "POST" &&
      ctx.request.url.includes("/api/consumer/reservation") &&
      ctx.request.body?.car != null &&
      ctx.request.body?.renter != null &&
      ctx.request.body?.reservation != null
    ) {
      const car = ctx.request.body.car;
      const renter = ctx.request.body.renter;
      const reservation = ctx.request.body.reservation;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        "gulftravelbosnia"
      );

      const carGroupFromDb = await strapi
        .query("api::car-group.car-group")
        .findOne({
          where: {
            userGroup: loggedUserUserGroup.id,
            cars: {
              registrationPlate: {
                $eq: car.registracija,
              },
            },
          },
          select: ["id"],
        });

      const body = {
        carId: carGroupFromDb.id,
        startDatetime: `${reservation.start_date}T${reservation.start_time}Z`,
        endDatetime: `${reservation.end_date}T${reservation.end_time}Z`,
        startLocation: "SARAJEVO AIRPORT (SJJ)",
        endLocation: "SARAJEVO AIRPORT (SJJ)",
        flightNumber: reservation.flight_no,
        user: {
          title: `${renter.title}.`,
          name: `${renter.first_name} ${renter.last_name}`,
          email: renter.email,
          telephone: email.phone,
        },
        comment: "stiglo iz gulftravelbosna.com",
      };

      await strapi.entityService.create("api::test-table.test-table", {
        data: {
          requestBody: body,
          requestHost: "idk",
        },
      });
      ctx.request.body = {
        ...ctx.request.body,
        ...body,
      };
    }

    return await next();
  };
};
