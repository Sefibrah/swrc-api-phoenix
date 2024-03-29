function getDays(startDateTime, endDateTime) {
  const oneDayInMilliseconds = 86400000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  const differenceInMilliseconds = Math.abs(
    new Date(endDateTime).getTime() - new Date(startDateTime).getTime()
  );
  let differenceInDays = Math.floor(
    differenceInMilliseconds / oneDayInMilliseconds
  );

  if (differenceInMilliseconds <= oneDayInMilliseconds) {
    return 1; // even if it's 1 millisecond, we will count it as a full day :)
  }

  if (differenceInMilliseconds % oneDayInMilliseconds >= 43200000) {
    differenceInDays++;
  }
  return differenceInDays;
}

module.exports = {
  getDays,
};
