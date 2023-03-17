module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];

    const prefix = subdomain.toString().toUpperCase();

    if (prefix.toLowerCase() != "localhost:1337") {
      const dbConfig = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env[`${prefix}_DB_NAME`],
        user: process.env[`${prefix}_DB_USERNAME`],
        password: process.env[`${prefix}_DB_PASSWORD`],
        ssl: false,
      };

      const currentConfig = strapi.db.config.connection.connection;
      strapi.db.config.connection.connection = {
        ...currentConfig,
        ...dbConfig,
      };
    }

    // Call the next middleware in the chain
    await next();
  };
};
