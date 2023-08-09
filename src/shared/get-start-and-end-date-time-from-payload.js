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
    puDay,
    puMonth,
    puYear,
    puMinute,
    puHour,
  });

  const endDateTime = getDateTimeFromObject({
    doDay,
    doMonth,
    doYear,
    doMinute,
    doHour,
  });
  return { startDateTime, endDateTime };
}

module.exports = {
  getStartAndEndDateTimeFromPayload,
};
