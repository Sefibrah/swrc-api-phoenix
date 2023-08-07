const {
  getLoggedUserUserGroup,
} = require("../shared/get-logged-user-user-group");
const { getSubdomainFromRequest } = require("../shared/get-subdomain");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (
      ctx.request.method === "POST" &&
      ctx.request.url.includes("/api/consumer/reservation") &&
      ctx.request.body?.car != null &&
      ctx.request.body?.renter != null &&
      ctx.request.body?.reservation != null
    ) {
      const subdomain = getSubdomainFromRequest(ctx.request);
      const car = ctx.request.body.car;
      const renter = ctx.request.body.renter;
      const reservation = ctx.request.body.reservation;
      const comment = ctx.request.body.comment;

      const loggedUserUserGroup = await getLoggedUserUserGroup(
        strapi,
        subdomain
      );
      const carGroupFromDb = await strapi
        .query("api::car-group.car-group")
        .findOne({
          where: {
            userGroup: loggedUserUserGroup.id,
            cars: {
              registrationPlate: { $eq: car.registracija },
            },
          },
          select: ["id"],
          populate: {
            cars: {
              select: ["registrationPlate"],
            },
          },
        });
      const body = {
        carId: carGroupFromDb.id,
        startDatetime: getDateTime(
          reservation.start_date,
          reservation.start_time
        ),
        endDatetime: getDateTime(reservation.end_date, reservation.end_time),
        startLocation: "SARAJEVO AIRPORT (SJJ)",
        endLocation: "SARAJEVO AIRPORT (SJJ)",
        flightNumber: reservation.flight_no,
        user: {
          title: `${renter.title}.`,
          name: `${renter.first_name} ${renter.last_name}`,
          email: renter.email,
          telephone: renter.phone,
        },
        comment,
      };
      ctx.request.body = {
        ...ctx.request.body,
        ...body,
      };
    }

    return await next();
  };
};

function getDateTime(dateString, timeString) {
  const [year, month, day] = dateString.split("-");
  const [hours, minutes] = timeString.split(":");
  const date = new Date(year, month - 1, day, hours, minutes);
  // fixme: should be more robust than this shit...
  date.setTime(date.getTime() - 3600000);
  return date.toISOString();
}
