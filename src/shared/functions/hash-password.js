const bcrypt = require("bcryptjs");
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    if (!password) {
      resolve(null);
    } else {
      bcrypt.hash(`${password}`, 10, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    }
  });
};
module.exports = {
  hashPassword,
};
