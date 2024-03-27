const combineActionWithService = (uids, endpoints) => {
  let array = [];
  uids.forEach((uid) => {
    let arr = endpoints.map((endpoint) => `${uid}.${endpoint}`);
    array = [...array, ...arr];
  });
  return array;
};

module.exports = {
  combineActionWithService,
};
