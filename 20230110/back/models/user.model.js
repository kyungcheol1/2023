//Class , 정적메서드
//Function ,

module.exports = (sequelize, DataTypes) => {
    // 1. 객체 속성이름 model > object
    // 2. Table field 정보
    // 3. Table option 정보
    return sequelize.define(
        "User",
        {
            userid: {
                type: DataTypes.STRING(30),
                allowNull: false,
                unique: true,
            },
            userpw: {
                type: DataTypes.STRING(64),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING(2),
                defaultValue: "남자",
            },
        },
        {
            freezeTableName: true,
            // timestapms: false,
        }
    );
};

