module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        "User",
        {
            userid: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            userpw: {
                type: Sequelize.STRING(64),
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            gender: {
                type: Sequelize.STRING(4),
                allowNull: false,
            },
        },
        {
            //tableName:"qwe" // table name 바꾸고 싶을 때
            freezeTableName: true,
            tiemstamps: false,
            charset: "utf8mb4",
            callate: "utf8mb4_general_ci", //테이블 스키마에 쓰면 자동으로 기본
        }
    ); // 1. 객체 속성명
};

