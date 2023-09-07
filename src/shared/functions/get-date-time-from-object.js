const { DateTime } = require("luxon");

function getDateTimeFromObject({ day, month, year, minute, hour }) {
  return DateTime.fromObject(
    {
      day,
      month,
      year,
      minute,
      hour,
    },
    { zone: "Europe/Sarajevo" }
  ).toJSDate();
}

module.exports = {
  getDateTimeFromObject,
};
