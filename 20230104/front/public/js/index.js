const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const state = [];

const pr = new Promise((resolve, reject) => {});

const request = ({ method, path, body }) => {
    return new Promise((resolve, reject) => {
        const host = `http://localhost:3000`;
        const xhr = new XMLHttpRequest();
        xhr.open(method, `${host}${path}`);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(body));

        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // callback(JSON.papse(xhr.response));
                resolve(JSON.parse(xhr.response));
            } else {
                reject("error");
            }
        };
    });
};

// class Comment {
//     constructor(Content) {
//         this.userid = "web7722";
//         this.content = Content;
//         this.updated = false;
//         this.now = new Date();
//     }

//     getToday(separator = "") {
//         const date = this.now;
//         let mm = date.getMonth() + 1;
//         let dd = date.getDate();

//         return [date.getFullYear(), (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join(separator);
//     }

//     set content(value) {
//         if (value.length === 0) throw new Error("content를 채워주세요.");
//         this.content = value;
//     }
// }

const setTotalRecord = () => {
    const span = document.querySelector("h4 > span");
    span.innerHTML = `(${state.length})`;
};
const getBox = (flag, content) => (!flag ? createContentBox(content) : createUpdateBox(content));

function createContentBox(content) {
    // const selector = "#" + "content-baisc"
    const template = document.querySelector("#content-baisc");
    const clone = document.importNode(template.content, true);
    const span = clone.querySelectorAll("span");

    span[0].innerHTML = content;
    console.log(content);
    return clone;
}

async function enterHandler(e) {
    if (e.keyCode !== 13) return;
    try {
        const { index } = e.target.parentNode.parentNode.parentNode.dataset;
        const { value } = e.target;
        const respone = await request({ method: "put", path: `/comments/${index + 1}`, body: { content: value } });
        state[index].Content = value;
        state[index].updated = !state[index].updated;

        console.log(state[index].Content);

        ///UUUUUUUUUUUUUUUUUUUUU

        drawing();
    } catch (e) {
        alert(e.message);
    }
}

function createUpdateBox(content) {
    const template = document.querySelector("#content-update");
    const clone = document.importNode(template.content, true);
    const input = clone.querySelector("span > input");
    input.addEventListener("keyup", enterHandler);
    input.value = content;

    return clone;
}

function createRow(index) {
    const template = document.querySelector("#commentRow");
    const clone = document.importNode(template.content, true);
    const ul = clone.querySelector("ul");
    const li = clone.querySelectorAll("li");

    const item = state[index];

    ul.dataset.index = index;
    li[0].innerHTML = item.userid;
    li[1].innerHTML = "";
    li[1].append(getBox(item.updated, item.content));
    li[2].innerHTML = item.register;

    return ul;
}

function drawing() {
    commentList.innerHTML = "";
    for (let i = state.length - 1; i >= 0; i--) {
        const row = createRow(i);
        commentList.append(row);
    }
}

async function addState(value) {
    try {
        // const instance = new Comment(value);
        // state.push(instance); ///CCCCCCCCCCCCCCCCCCC
        const content = value;
        // request({ method: `post`, path: "/comments", body: { content: value } }, (data) => {
        //     state.push(data);
        //     setTotalRecord();
        //     drawing();
        // });
        // request({ method: `post`, path: "/comments", body: { content: value } })
        //     .then((instance) => {
        //         state.push(instance);
        //         setTotalRecord();
        //         drawing();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        //     .finally(() => {});
        const instance = await request({ method: `post`, path: "/comments", body: { content } });
        state.push(instance);
        setTotalRecord();
        drawing();
    } catch (e) {
        alert(e.message);
    }
}

function submitHandler(e) {
    e.preventDefault();
    const { content } = e.target;
    const { value } = content;

    addState(value);

    content.focus();
    this.reset();
}

function clickHandler(e) {
    const contentNode = e.target.parentNode;
    const { index } = contentNode.parentNode.dataset;
    switch (e.target.className) {
        case "comment-delete-btn":
            const flag = confirm("삭제 할꺼야?~");
            if (!flag) return;

            state.splice(index, 1);
            drawing();
            ///DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
            break;
        case "comment-update-btn":
            state[index].updated = !state[index].updated;
            const content = e.target.innerHTML;
            contentNode.innerHTML = "";
            const item = getBox(state[index].updated, content);
            contentNode.append(item);
            break;
    }
}

setTotalRecord();
commentList.addEventListener("click", clickHandler);
commentFrm.addEventListener("submit", submitHandler);

