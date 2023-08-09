function getRandomString() {
  return (Math.random() * 1000000).toString(36).replace(".", "");
}

module.exports = {
  getRandomString,
};
