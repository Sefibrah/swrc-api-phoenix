module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
      },
      options: {},
    },
  },
  // Use dynamic connection objects based on the subdomain
  functions: {
    database: {
      connections: {},
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
