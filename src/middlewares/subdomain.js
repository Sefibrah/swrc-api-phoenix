module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];

    const prefix = subdomain.toString().toUpperCase();

    if (
      prefix.toLowerCase() != "localhost:1337" &&
      process.env.NODE_ENV === "Production"
    ) {
      const newConfig = {
        database: process.env[`${prefix}_DATABASE_NAME`],
        user: process.env[`${prefix}_DATABASE_USERNAME`],
        password: process.env[`${prefix}_DATABASE_PASSWORD`],
      };

      const currentConfig = strapi.db.config.connection.connection;
      strapi.db.config.connection.connection = {
        ...currentConfig,
        ...newConfig,
      };
    }

    // Call the next middleware in the chain
    await next();
  };
};
