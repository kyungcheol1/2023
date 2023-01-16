// create table `board`(
// id INT PRIMARY KEY AUTO_INCREMENT,
// subject VARCHAR(100) NOT NULL,
// content TEXT NOT NULL,
// userid VARCHAR(30) NOT NULL,
// register_date datetime default now(),
// hit INT default 0
// )

module.exports = (sequelize, Sequelize) => {
    class Board extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    subject: {
                        type: Sequelize.STRING(100),
                        allowNull: false,
                    },
                    content: {
                        type: Sequelize.TEXT,
                        allowNull: false,
                    },
                    registerDate: {
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.fn("NOW"),
                    },
                    userid: {
                        type: Sequelize.STRING(30),
                    },
                    hit: {
                        type: Sequelize.INTEGER,
                        defaultValue: 0,
                    },
                },
                {
                    sequelize,
                }
            );
        }
        static associate(models) {
            this.belongsTo(models.User, {
                //자식은 belongsTo 부모는 hasMany{
                FOREIGNKEY: `userid`,
            });
        }
    }
    return Board.initialize();
};

