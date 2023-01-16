const mysql = require("mysql2");

module.exports = mysql
    .createPool({
        host: `127.0.0.1`,
        port: `3306`,
        user: `root`,
        password: `Qjel216!`,
        database: `comments`,
    })
    .promise();

// rdbms table db도

