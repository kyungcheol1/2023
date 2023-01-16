class UserRepository {
    constructor({ User }) {
        this.User = User;
    }

    async addUser(payload) {
        try {
            const user = await this.User.create(payload); //insert 문을 때리는 메소드

            // let userid = "id";
            // let userpw = "pw";
            // let username = "name";
            // let gender = "여자";
            // await this.mysql.query(`INSERT INTO User(userid, userpw, username, gender) VALUE("${userid}","${userpw}","${username}","${gender}")`);
            return null;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getUserByUserid({ userid }) {
        const user = await this.User.findOne({
            where: {
                userid: userid,
            },
        });
        return user.dataValues;
    }
}

module.exports = UserRepository;

