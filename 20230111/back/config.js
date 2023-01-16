require("dotenv").config();

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    db: {
        development: {
            port: process.env.DB_PORT,
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            dialect: "mysql",
        },
    },
};

module.exports = config;

