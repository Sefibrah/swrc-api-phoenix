function getSubdomainFromRequest(request) {
  // makes sense only when i am doing it on localhost, for production this should never work
  // unless a hacker comes??
  if (request.headers.host.includes("localhost")) {
    return "gulftravelbosnia";
  } else {
    const host = request.headers.host;
    return host.split(".")[0];
  }
}

module.exports = {
  getSubdomainFromRequest,
};
