// module.exports = (repository) => {
//     return {
//         list: async () => {
//             const [list] = await repository.findAll();
//             return list;
//         },
//     };
// };

class CommentService {
    constructor({ commentRepository, config }) {
        this.commentRepository = commentRepository;
        this.config = config;
        this.HttpException = config.exception.HttpException;
    }
    async list() {
        try {
            const list = await this.commentRepository.findAll();
            if (list.length === 0) throw "내용없음";
            return list;
        } catch (e) {
            throw new this.HttpException(e);
        }
    }
}

module.exports = CommentService;

