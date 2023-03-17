module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];
    const envPrefix = `${
      host.split(".").length === 1
        ? "DATABASE"
        : subdomain.toString().toUpperCase() + "_DATABASE"
    }`;

    console.log(host);
    console.log(subdomain);
    console.log(envPrefix);

    const dbUser = process.env[`${envPrefix}_USERNAME`];
    const dbPassword = process.env[`${envPrefix}_PASSWORD`];
    const dbName = process.env[`${envPrefix}_NAME`];

    console.log(dbUser);
    console.log(dbPassword);
    console.log(dbName);

    const connections = strapi.config.get("database.connections", {});
    const defaultConnection = strapi.config.get(
      "database.defaultConnection",
      "default"
    );
    const defaultSettings = connections[defaultConnection];
    const dbSettings = Object.assign({}, defaultSettings, {
      database: dbName,
      user: dbUser,
      password: dbPassword,
    });
    connections[defaultConnection] = dbSettings;
    strapi.config.set({ database: { connections } });

    console.log(strapi.db.config.connection);

    // Call the next middleware in the chain
    await next();
  };
};
