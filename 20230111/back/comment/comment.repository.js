class CommentRepository {
    constructor({ sequelize }) {
        this.sequelize = sequelize;
        console.log(this.sequelize.model);
    }

    async findAll() {
        try {
            const respone = await this.sequelize.models.Comment.findAll();
            console.log(respone);
            return respone;
        } catch (e) {
            throw new Error(e);
        }
    }

    async create({ id, content }) {
        try {
            const respone = await this.sequelize.models.Comment.create({ userid: id, content: content });
            console.log(respone);
            return respone;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = CommentRepository;

