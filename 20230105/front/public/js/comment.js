const basicBox = (content) => {
    const template = document.querySelector("#content-baisc");
    const clone = document.importNode(template.content, true);
    const span = clone.querySelector(".comment-update-btn");
    span.innerHTML = content;
    return clone;
};

const box = (updated, content) => {
    if (updated) {
    } else {
        return basicBox(content);
    }
};

const row = ({ id, userid, content, register, updated }) => {
    const template = document.querySelector("#commentRow");
    const clone = document.importNode(template.content, true);

    const ul = clone.querySelector("ul");
    const li = clone.querySelectorAll("li");

    ul.dataset.index = id;
    li[0].innerHTML = userid;
    li[1].append(box(updated, content));
    li[2].innerHTML = register;

    return ul;
};

const drawing = (item) => {
    const list = document.querySelector("#comment-list");
    list.append(item);
    const ulElement = document.querySelectorAll("#comment-list > ul");
    totalRecord(ulElement.length);
};

const getCommentList = async () => {
    try {
        const res = await axios.get("http://localhost:3000/comments");
        return res.data;
    } catch (e) {
        return null;
    }
};

const addComment = async (content) => {
    try {
        const res = await axios.post("http://localhost:3000/comments", { content });
        return res.data;
    } catch (e) {
        return null;
    }
};

const totalRecord = (count) => {
    const countElement = document.querySelector("h4 > span");
    countElement.innerHTML = `(${count})`;
};

const init = async () => {
    const list = await getCommentList();
    totalRecord(list.length);

    for (const comment of list) {
        const item = row(comment);
        drawing(item);
    }
};

const eventManage = ({ formHandeler, clickHandler }) => {
    const form = document.querySelector("#commentFrm");
    const list = document.querySelector("#comment-list");
    form.addEventListener("submit", formHandeler);
    list.addEventListener("click", clickHandler);
};

const formHandeler = async (e) => {
    e.preventDefault();
    const { content } = e.target;

    const item = await addComment(content.value);
    const ul = row(item);
    drawing(ul);

    e.target.reset();
    content.focus();
};

const clickHandler = async (e) => {
    console.log(e.target.parentNode.parentNode);
    if (e.target.className === "comment-update-btn") {
        console.log("제목쓰");
    } else if (e.target.className === "comment-delete-btn") {
        console.log("삭제쓰");
    }
};

(async () => {
    init();
    eventManage({
        formHandeler,
        clickHandler,
    });
})();

