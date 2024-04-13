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

  const twoHours = 7200000 // 2 hours * 60 minutes * 60 seconds * 1000 milliseconds
  if (differenceInMilliseconds % oneDayInMilliseconds > twoHours) {
    differenceInDays++;
  }
  return differenceInDays;
}

module.exports = {
  getDays,
};
