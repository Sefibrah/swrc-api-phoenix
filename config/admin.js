module.exports = ({ env }) => {
  // var host = window.location.host;
  // var subdomain = host.split(".")[0];
  return {
    auth: {
      secret: env(`ADMIN_JWT_SECRET`),
    },
    apiToken: {
      salt: env(`API_TOKEN_SALT`),
    },
    transfer: {
      token: {
        salt: env(`API_TOKEN_SALT`),
      },
    },
  };
};
