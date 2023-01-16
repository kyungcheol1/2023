const config = require("../config")["db"];
const Sequelize = require("sequelize");
const boardModel = require("./board.model");

const sequelize = new Sequelize(config.database, config.username, config.password, config);

require("./user.model")(sequelize, Sequelize);
require("./board.model")(sequelize, Sequelize);

const { models } = sequelize;
// models.user.associate(models);
// models.Board.associate(models);

// 1. models [index.js, board.model.js, user.model.js]
//
for (const key in models) {
    if (typeof models[key].associate !== "function") continue;
    models[key].associate(models);
}

(async () => {
    await sequelize.sync({ force: true });
    const { User, Board } = sequelize.models;
    // await User.create({ userid: "wen7722", userpw: "1234", username: "12344" });
    // await User.create({ userid: "admin", userpw: "1234", username: "12344" });

    // await Board.create({ subject: "게시글1", content: "내용", userid: "wen7722" });
    // await Board.create({ subject: "게시글2", content: "내용", userid: "wen7722" });
    // await Board.create({ subject: "게시글3", content: "내용", userid: "wen7722" });
    // await Board.create({ subject: "게시글4", content: "내용", userid: "wen7722" });
    // await Board.create({ subject: "게시글5", content: "내용", userid: "admin" });
    // await Board.create({ subject: "게시글8", content: "내용", userid: "admin" });
    const board = await Board.findAll({ raw: true });
    // , nest: true, include: [{ model: User }]
    // console.log(board);
})();

module.exports = {
    sequelize,
    Sequelize,
};

