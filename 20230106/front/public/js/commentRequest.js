import request from "/js/request.js";

class CommentRequest {
    constructor(request) {
        this.request = request;
    }

    async create(body) {
        try {
            const { data } = await this.request.post("/comments", body);
            return data;
        } catch (e) {
            return null;
        }
    }
    async find() {
        try {
            const { data } = await this.request.get("/comments");
            return data;
        } catch (e) {
            return null;
        }
    }
    async update(id, body) {
        try {
            const { data } = await this.request.put(`/comments/${id}`, body);
            return data;
        } catch (e) {
            return null;
        }
    }
    async delete(id) {
        try {
            const { data } = await this.request.delete(`/comments/${id}`);
        } catch (e) {
            return null;
        }
    }
}

// const req = new CommentRequest(request); // axios 에 관련된 함수들만 들어있음
// req.create({ content: "hello world!" }).then((data) => {
//     console.log(data);
// });
// (async () => {
//     const response1 = await req.create({ content: "hello world!" });
//     console.log(response1);

//     const response2 = await req.find();
//     console.log(response2);

//     const response3 = await req.update(1, { content: "hello world!" });
//     console.log(response3);

//     const response4 = await req.delete(2);
//     console.log(response4);
// })();
export default new CommentRequest(request);

