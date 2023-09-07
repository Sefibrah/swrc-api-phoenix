function getJwt(request) {
  return request.header?.authorization?.replace("Bearer ", "") || null;
}

module.exports = {
  getJwt,
};