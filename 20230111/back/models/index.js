const Sequelize = require("sequelize"); // class다 / class 안에 {DataTypes} 라는 객체가 프로토 타입으로 들어가 있다.
const config = require("../config");
const db = config.db[config.env];

const sequelize = new Sequelize(db.database, db.username, db.password, db);
// console.dir(Sequelize);
// require("./User")(sequelize, Sequelize);
require("../test")(sequelize, Sequelize);

// console.log(sequelize.models.Comment === Comment);
// Comment.init(
//     {
//         userid: {
//             type: Sequelize.STRING(30),
//             allowNull: false,
//         },
//         content: {
//             type: Sequelize.TEXT(),
//             allowNull: false,
//         },
//     },
//     {
//         sequelize: sequelize,
//         freezeTableName: true,
//     }
// );
//sequelize.models.User = {}

module.exports = {
    sequelize,
    Sequelize,
};

