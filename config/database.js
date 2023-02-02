module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    // connection: {
    //   host: env("DATABASE_HOST", "127.0.0.1"),
    //   port: env.int("DATABASE_PORT", 3306),
    //   database: env("DATABASE_NAME", "mystrapi"),
    //   user: env("DATABASE_USERNAME", "root"),
    //   password: env("DATABASE_PASSWORD", ""),
    //   ssl: env.bool("DATABASE_SSL", false),
    // },

    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "mystrapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "F@irc3nt"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
