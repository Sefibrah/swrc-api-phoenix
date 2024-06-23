function shortenString(str) {
  if (str.length <= 9) {
    return str; // Return the original string if it's 9 characters or less
  }
  return `${str.substring(0, 3)}...${str.substring(str.length - 6)}`;
}

module.exports = {
  shortenString,
};
