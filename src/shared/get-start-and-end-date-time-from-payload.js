const { DateTime } = require("luxon");

function getStartAndEndDateTimeFromPayload({
  puDay,
  puMonth,
  puYear,
  puMinute,
  puHour,
  doDay,
  doMonth,
  doYear,
  doMinute,
  doHour,
}) {
  const startDateTime = DateTime.fromObject(
    {
      day: puDay,
      month: puMonth,
      year: puYear,
      minute: puMinute,
      hour: puHour,
    },
    { zone: "Europe/Sarajevo" }
  ).toJSDate();

  const endDateTime = DateTime.fromObject(
    {
      day: doDay,
      month: doMonth,
      year: doYear,
      minute: doMinute,
      hour: doHour,
    },
    { zone: "Europe/Sarajevo" }
  ).toJSDate();
  return { startDateTime, endDateTime };
}

module.exports = {
  getStartAndEndDateTimeFromPayload,
};
