module.exports = (config, { strapi }) => {
  return async (ctx, next) => {

    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];
    const envPrefix = subdomain.toString().toUpperCase() || 'DATABASE';

    console.log(host);
    console.log(subdomain);
    console.log(envPrefix);
    if (
      host != "https://swrcapi.com" &&
      envPrefix.toLowerCase() != "localhost:1337" &&
      process.env.NODE_ENV === "production"
    ) {
      const dbUser = process.env[`${envPrefix}_USER`];
      const dbPassword = process.env[`${envPrefix}_PASSWORD`];
      const dbName = process.env[`${envPrefix}_NAME`];

      const settings = {
        client: 'mysql',
        connection: {
          host: process.env.HOST,
          port: process.env.PORT || 3306,
          database: dbName,
          user: dbUser,
          password: dbPassword,
          charset: 'utf8',
          collation: 'utf8_general_ci',
        },
      };

      await strapi.config.functions.database.set(settings);
    }

    // Call the next middleware in the chain
    await next();
  };
};
