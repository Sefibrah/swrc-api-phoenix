module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];
    const envPrefix = `${
      host.split(".").length === 1
        ? "DATABASE"
        : subdomain.toString().toUpperCase() + "_DATABASE"
    }`;

    strapi.log.debug(host);
    strapi.log.debug(subdomain);
    strapi.log.debug(envPrefix);

    const dbUser = process.env[`${envPrefix}_USERNAME`];
    const dbPassword = process.env[`${envPrefix}_PASSWORD`];
    const dbName = process.env[`${envPrefix}_NAME`];

    strapi.log.debug(dbUser);
    strapi.log.debug(dbPassword);
    strapi.log.debug(dbName);

    // const connections = strapi.config.get("database.connections", {});
    // const defaultConnection = strapi.config.get(
    //   "database.defaultConnection",
    //   "default"
    // );
    // const defaultSettings = connections[defaultConnection];
    // const dbSettings = Object.assign({}, defaultSettings, {
    //   database: dbName,
    //   user: dbUser,
    //   password: dbPassword,
    // });
    // connections[defaultConnection] = dbSettings;
    // strapi.config.set({ database: { connections } });

    const dbSettings = {
      database: dbName,
      user: dbUser,
      password: dbPassword,
    };

    strapi.db.config.connection.connection = {
      ...strapi.db.config.connection.connection,
      ...dbSettings,
    };

    console.log(strapi.db.config.connection.connection);
    strapi.log.debug(strapi.db.config.connection.connection);

    // Call the next middleware in the chain
    await next();
  };
};
