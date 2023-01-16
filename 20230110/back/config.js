require("dotenv").config({ path: "~/nodejs/2023/202301/20230110/back/.env" });

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const HttpException = require("./exceptions/HTTPException");
const config = {
    exception: { HttpException },
    port: process.env.PORT,
    env: process.env.NODE_ENV || "development",
    db: {
        development: {
            host: host,
            port: port,
            username: user,
            password: password,
            database,
            dialect: "mysql",
        },
        test: {
            host,
            port,
            username: user,
            password,
            database,
            dialect: "mysql",
            logging: false,
        },
    },
};
//dialect = sequelize 를 사용하면서 새로 들어가는 속성

module.exports = config;

