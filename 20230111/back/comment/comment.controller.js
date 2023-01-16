class CommentController {
    constructor({ service }) {
        this.service = service;
    }

    async getlist(req, res, next) {
        const list = await this.service.commentfind();
        res.send(list);
    }

    async create(req, res, next) {
        const { id, content } = req.body;
        console.log(id, content);
        const respone = await this.service.commentcreate({ id, content });
        res.send(respone);
    }
}

module.exports = CommentController;

