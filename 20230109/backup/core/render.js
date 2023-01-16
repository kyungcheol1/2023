const app = document.querySelector("#app");

let state = {
    list: [
        { id: 1, userid: "web7722", content: "hello", register: "2023-01-09" },
        { id: 2, userid: "web7722", content: "hello", register: "2023-01-09" },
        { id: 3, userid: "web7722", content: "hello", register: "2023-01-09" },
    ],
};

const setState = (newState) => {
    // state 변수가 안바뀌었으면 render 함수를 호출하지 않겠다는 것을 여기서 구현하면 됨
    if (state === newState) return;
    state = { ...state, ...newState };
    render();
};

const render = () => {
    const { list } = state;
    // const comment = list.map((comment) => {
    //     return `
    //     <ul class="comment-row" data-index="${comment.id}">
    //         <li class="comment-id">${comment.userid}</li>
    //         <li class="comment-content">${comment.content}</li>
    //         <li class="comment-date">${comment.register}</li>
    //     </ul>`;
    // });
    app.innerHTML = `
        <form>input</form>
        <div id="comment-list">
        ${list
            .map((comment) => {
                return `<ul class="comment-row" data-index="${comment.id}">
                        <li class="comment-id">${comment.userid}</li>
                        <li class="comment-content">${comment.content}</li>
                        <li class="comment-date">${comment.register}</li>
                        </ul>`;
            })
            .join("")}
        <div>
        <button id="btn">버튼!</button>`;

    document.querySelector("#btn").addEventListener("click", () => {
        // state.list.push();
        // render()
        // 데이터가 바뀌면 state가 바뀐다.
        setState({ list: [...list, { id: 4, userid: "web7722", content: "hello", register: "2023-01-09" }] });
    });
};

export default render;

