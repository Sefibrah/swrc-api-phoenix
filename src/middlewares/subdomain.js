module.exports = (strapi) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;
    const subdomain = host.split(".")[0];

    const database = `${subdomain}_db`;

    strapi.connections.default.settings.database = database;

    // Call the next middleware in the chain
    await next();
  };
};
