// const mysql = require("../models/index");
// const findAll = async () => {
//     const result = await mysql.query("SELECT * FROM Comments");
//     return result;
// };

// module.exports = (mysql) => {
//     return {
//         findAll: async () => {
//             const result = await mysql.query("SELECT * FROM Comment");
//             return result;
//         },
//     };
// };

// function repository(mysql) {
//     this.mysql = mysql;
//     this.list = () => {
//         this.mysql.query;
//     };
// }

class CommentRepository {
    constructor({ mysql }) {
        this.mysql = mysql;
    }

    wirte() {}
    async findAll() {
        try {
            const [list] = await this.mysql.query("SELECT * FROM Comment");
            return list;
        } catch (e) {
            throw new Error(e);
        }
    }
    view() {}
    updata() {}
    delete() {}
}

module.exports = CommentRepository;

