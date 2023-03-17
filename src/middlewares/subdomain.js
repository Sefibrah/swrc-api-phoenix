module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = ctx.request.header.host.split(".")[0]; // get the subdomain from the request header
    console.log(strapi.db.config.connections);
    const connections = strapi.db.config.connections;

    // modify the default connection object based on the subdomain
    if (subdomain === "gulftravelbosnia") {
      connections.default = {
        connector: "bookshelf",
        settings: {
          client: "mysql",
          host: env("DATABASE_HOST", "localhost"),
          port: env.int("DATABASE_PORT", 3306),
          database: env("GULFTRAVELBOSNIA_DATABASE_NAME", "strapi"),
          username: env("GULFTRAVELBOSNIA_DATABASE_USERNAME", "strapi"),
          password: env("GULFTRAVELBOSNIA_DATABASE_PASSWORD", "strapi"),
        },
        options: {},
      };
    }
    await next();
  };
};
