module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = ctx.request.header.host.split(".")[0]; // get the subdomain from the request header
    const connections = strapi.db.config.connections;
    console.log("connections", strapi.db.config.connections);
    console.log("subdomain", subdomain);

    // modify the default connection object based on the subdomain
    if (subdomain === "gulftravelbosnia") {
      console.log("connections.gulftravelbosnia", connections.gulftravelbosnia);
      strapi.db.config.connections.default = connections.gulftravelbosnia;
      console.log(
        "strapi.db.config.connections.default",
        strapi.db.config.connections.default
      );
    }

    strapi
      .plugin("sentry")
      .service("sentry")
      .sendError("SEE WHAT IS GOING ON!!!", (scope, sentryInstance) => {
        // Customize the scope here
        scope.setTag("my_custom_tag", "Tag value");
      });
    await next();
  };
};
