class Component {
    target;
    state;

    constructor(_target) {
        this.target = _target;
        this.setup();
        this.render();
        this.setEvent();
    }

    setup() {}
    template() {}
    mounted() {}
    render() {
        this.target.innerHTML = this.template();
    }

    setState(newState) {
        if (this.state === newState) return;
        this.state = { ...this.state, ...newState };
        this.render();
    }
}

class App extends Component {
    async setup() {
        const respone = await axios.get("http://localhost:3000/comments");
        this.state = {
            list: respone.data,
            user: {
                userid: "web7722",
                username: "ingoo",
            },
        };
    }

    template() {
        const { list } = this.state;

        return `
            <ul class='comment'>
                <li class='comment-form'>
                    <form id="commentFrm">
                        <h4>
                            댓글쓰기
                            <span></span>
                        <h4>
                        <span class='ps_box'>
                            <input type="text" class='int' name="content" placeholder="댓글입력">
                        </span>
                        <button type="submit" class='btn'>전송</button>
                    </form>
                </li>
                <li id="comment-list">
                    ${list
                        .map((comment) => {
                            return `<ul class="comment-row" data-index="${comment.id}">
                                    <li class="comment-id">${comment.userid}</li>
                                    <li class="comment-content">${comment.update ? this.update(comment.content) : this.content(comment.content)}</li>
                                    <li class="comment-date">${comment.register}</li>
                                    </ul>`;
                        })
                        .join("")}
                </li>
            </ul>`;
    }
}

export default App;

