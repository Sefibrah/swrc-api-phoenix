module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = ctx.request.header.host.split(".")[0]; // get the subdomain from the request header

    console.log(strapi.config.database);
    if (
      strapi.config.database?.connections != null &&
      strapi.config.database?.connections[subdomain]
    ) {
      // if the database connection exists, set it as the current connection
      strapi.config.currentEnvironment.database = subdomain;
    } else {
      // if the database connection does not exist, log an error
      console.error(`Database connection ${subdomain} does not exist`);
    }
    await next();
  };
};
