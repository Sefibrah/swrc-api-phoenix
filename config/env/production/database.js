module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
      },
      options: {},
    },
    gulftravelbosnia: {
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
    },
  },
});