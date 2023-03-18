module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const subdomain = ctx.request.header.host.split(".")[0]; // get the subdomain from the request header
    console.log(strapi.db.config.connections);
    const connections = strapi.db.config.connections;

    strapi
      .plugin("sentry")
      .service("sentry")
      .sendError(`subdomain: ${subdomain}`, (scope, sentryInstance) => {
        // Customize the scope here
        scope.setTag("my_custom_tag", "Tag value");
      });

    strapi
      .plugin("sentry")
      .service("sentry")
      .sendError(connections, (scope, sentryInstance) => {
        // Customize the scope here
        scope.setTag("my_custom_tag", "Tag value");
      });
    // modify the default connection object based on the subdomain
    if (subdomain === "gulftravelbosnia") {
      strapi
        .plugin("sentry")
        .service("sentry")
        .sendError(connections.gulftravelbosnia, (scope, sentryInstance) => {
          // Customize the scope here
          scope.setTag("my_custom_tag", "Tag value");
        });
      strapi.db.config.connections.default = connections.gulftravelbosnia;

      strapi
        .plugin("sentry")
        .service("sentry")
        .sendError(
          strapi.db.config.connections.default,
          (scope, sentryInstance) => {
            // Customize the scope here
            scope.setTag("my_custom_tag", "Tag value");
          }
        );
    }
    await next();
  };
};
