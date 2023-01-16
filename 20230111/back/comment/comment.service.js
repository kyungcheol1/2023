class CommentService {
    constructor({ repo }) {
        this.repo = repo;
    }

    async commentfind() {
        try {
            const list = await this.repo.findAll();
            return list;
        } catch (e) {
            throw new Error(e);
        }
    }

    async commentcreate({ id, content }) {
        try {
            const respone = await this.repo.create({ id, content });
            return respone;
        } catch (e) {
            throw new Error(e);
        }
    }
}
module.exports = CommentService;

