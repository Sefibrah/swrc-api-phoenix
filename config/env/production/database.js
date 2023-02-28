module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USER"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);

// console.log(config);

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: false,
//     },
//     debug: false,
//   },
// });
