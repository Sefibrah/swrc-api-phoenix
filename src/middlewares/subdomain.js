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
          host: process.env.DATABASE_HOST,
          port: process.env.DATABASE_PORT,
          database: process.env.GULFTRAVELBOSNIA_DATABASE_NAME,
          username: process.env.GULFTRAVELBOSNIA_DATABASE_USERNAME,
          password: process.env.GULFTRAVELBOSNIA_DATABASE_PASSWORD,
        },
        options: {},
      };
    }
    await next();
  };
};
