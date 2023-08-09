const { DateTime } = require("luxon");
const { getDateTimeFromObject } = require("./get-date-time-from-object");

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
  const startDateTime = getDateTimeFromObject({
    day: puDay,
    month: puMonth,
    year: puYear,
    minute: puMinute,
    hour: puHour,
  });

  const endDateTime = getDateTimeFromObject({
    day: doDay,
    month: doMonth,
    year: doYear,
    minute: doMinute,
    hour: doHour,
  });
  return { startDateTime, endDateTime };
}

module.exports = {
  getStartAndEndDateTimeFromPayload,
};
