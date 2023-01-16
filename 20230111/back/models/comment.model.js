module.exports = (sequelize, Sequelize) => {
    class Comment extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    userid: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    content: {
                        type: Sequelize.TEXT(),
                        allowNull: false,
                    },
                },
                {
                    sequelize: sequelize,
                    freezeTableName: true,
                }
            );
        }
    }
    return Comment.initialize();
};

//커스터마이징 하기엔 클래스 문법이 좋다

// // const { sequelize, Sequelize } = require("./");
// const Sequelize = require("sequelize");

// class Comment extends Sequelize.Model {
//     static initialize(sequelize, DataTypes) {
//         this.init(
//             {
//                 userid: {
//                     type: DataTypes.STRING(30),
//                     allowNull: false,
//                 },
//                 content: {
//                     type: DataTypes.TEXT(),
//                     allowNull: false,
//                 },
//             },
//             {
//                 sequelize: sequelize,
//                 freezeTableName: true,
//             }
//         );
//     }
// }
// // Comment.init(
// //     {
// //         userid: {
// //             type: Sequelize.STRING(30),
// //             allowNull: false,
// //         },
// //         content: {
// //             type: Sequelize.TEXT(),
// //             allowNull: false,
// //         },
// //     },
// //     {
// //         sequelize: sequelize,
// //         freezeTableName: true,
// //     }
// // );
// module.exports = Comment;

