module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = ctx.request.header.host.split(".")[0]; // get the subdomain from the request header
    console.log(strapi.db.config.connections);
    const connections = strapi.db.config.connections;

    // modify the default connection object based on the subdomain
    if (subdomain === "gulftravelbosnia") {
      strapi.db.config.connections.default = connections.gulftravelbosnia;
    }
    await next();
  };
};
