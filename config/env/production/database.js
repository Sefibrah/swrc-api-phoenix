module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
      options: {},
    },
    gulftravelbosnia: {
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
    },
  },
});
