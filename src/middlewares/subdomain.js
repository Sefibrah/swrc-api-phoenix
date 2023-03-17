module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];
    const envPrefix =
      `${subdomain.toString().toUpperCase()}_DATABASE` || "DATABASE";

    const dbUser = process.env[`${envPrefix}_USER`];
    const dbPassword = process.env[`${envPrefix}_PASSWORD`];
    const dbName = process.env[`${envPrefix}_NAME`];

    const settings = {
      database: dbName,
      user: dbUser,
      password: dbPassword,
    };

    strapi.db.config.connection.connection = {
      ...strapi.db.config.connection.connection,
      ...settings,
    };

    // Call the next middleware in the chain
    await next();
  };
};
