module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-52-45-14-227.compute-1.amazonaws.com",
      user: "ctgreoerojwnes",
      password:
        "2710e5b6117b1db9aa5a5e2f69ba9dc61be8225268d4984b9176abe509da4faa",
      database: "d101msrcihip3u",
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },
  testing: {
    client: "pg",
    connection: {
      host: "ec2-52-45-14-227.compute-1.amazonaws.com",
      user: "ctgreoerojwnes",
      password:
        "2710e5b6117b1db9aa5a5e2f69ba9dc61be8225268d4984b9176abe509da4faa",
      database: "d101msrcihip3u",
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  }
}
