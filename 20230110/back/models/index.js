const config = require("../config");
const Sequelize = require("sequelize");
// console.log(typeof Sequelize); //function > 실행이 가능
const env = config.env;
const db = config.db[env];

const sequelize = new Sequelize(db.database, db.username, db.password, db);
// console.log(sqeuelize);
/**pool: Pool {
      log: false,
      idleTimeoutMillis: 10000,
      acquireTimeoutMillis: 60000,
      reapIntervalMillis: 1000,
      maxUsesPerResource: Infinity,
      _factory: [Object],
      _count: 0,
      
      pool을 쓸 수 있는 상태가 되었다.
      통신을 할 때 사용하게 된다.
      model을 확인해야함
      */
// const mysql = require("mysql2");

// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// const user = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const database = process.env.DB_DATABASE;

// const pool = mysql
//     .createPool({
//         host,
//         port,
//         user,
//         password,
//         database,
//     })
//     .promise();

// // pool.query("SELECT * FROM Comment").then((data) => {
// //     console.log(data);
// // });

// module.exports = pool;
const user = require("./user.model")(sequelize, Sequelize);
// console.dir(user);
// console.log(sqeuelize.models.User === user); //  models: { User: User }, 확인
module.exports = {
    Sequelize,
    sequelize,
};

//둘 다 쓸대가 있다.

