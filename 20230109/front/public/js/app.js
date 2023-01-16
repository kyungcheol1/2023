import Component from "/js/core/Component.js";

class App extends Component {
    // constructor(target) {
    //     super(target);
    // }
    // } //생략이 가능하다 ..는데 모르겠다.

    async setup() {
        const respone = await axios.get("http://localhost:3000/comments");
        const list = respone.data;

        this.state = {
            list: [],
            user: {
                userid: "web7722",
                username: "ingoo",
            },
        };

        this.setState({ list: list });
    }

    content(content) {
        return `
            <span class="comment-update-btn">${content}</span>
            <span class="comment-delete-btn">❌</span>`;
    }

    update(content) {
        return `
            <span>
                <input type="text" class="comment-update-input" data-value="" />
            </span>
            <span class="comment-delete-btn">❌</span>`;
    }

    async mounted() {
        // this.setState()
    }

    async template() {
        const list = this.state?.list;
        if (list === undefined) return "로딩중";
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

    mounted() {}

    setEvent() {
        // this.target.querySelector("#btn").addEventListener("click", () => {
        //     console.log("클릭!!");
        //     const { list } = this.state;
        //     this.setState({ list: [...list, { id: 4, userid: "web7722", content: "hello", register: "2023-01-09" }] });
        // });
        // this.target.addEventListener("click", (e) => {
        //     const list = [...this.state.list];
        //     if (e.target.classList.contains("btn")) {
        //         list.push({ id: 4, userid: "web7722", content: "hello", register: "2023-01-09" });
        //         this.setState({ list });
        //     }
        //     // if(e.target.classList)
        // }); // 단점 > 원하지 않는 곳에도 이벤트가 발동된다.
        this.addEvent("click", ".btn", (e) => {
            console.log("click~~");
        });

        this.addEvent("submit", ".comment-form", (e) => {
            e.preventDefault();
            const { list } = this.state;
            const value = e.target.content.value;
            this.setState({ list: [...list, { id: list.length, userid: "web7722", content: value, register: "2023-01-09", update: false }] });
        });

        this.addEvent("click", ".comment-update-btn", (e) => {
            const ul = e.target.closest(".comment-row");
            const { index } = ul.dataset;
            const list = [...this.state.list];
            const newList = list.map((v) => {
                if (v.id === parseInt(index)) v.update = true;
                return v;
            });
            this.setState({ list: newList });
        });

        this.addEvent("click", ".comment-delete-btn", (e) => {
            const ul = e.target.closest(".comment-row");
            const { index } = ul.dataset;

            const list = [...this.state.list].filter((v) => v.id !== parseInt(index));
            this.setState({ list });
        });

        this.addEvent("keypress", ".comment-update-input", (e) => {
            if (e.keyCode !== 13) return;

            const ul = e.target.closest(".comment-row");
            const index = parseInt(ul.dataset.index);

            //요청
            //응답
            //연산이 많다 > 프론트  연산이 적어서 백이 견딜 수 있다 > 백

            const list = this.state.list.map((v) => {
                if (v.id === parseInt(index)) {
                    v.content = e.target.value;
                    v.update = false;
                }
                return v;
            });
            this.setState({ list });
        });
    }
}

export default App;

