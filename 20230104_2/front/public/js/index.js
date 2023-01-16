const form = document.querySelector("#commentFrm");
const reply = document.querySelector("#comment-list");

const box = (content) => {
    const btns = document.querySelector("#content-basic");
    const clone = document.importNode(btns.content, true);
    const span = clone.querySelector(".comment-update-btn");
    span.innerHTML = content;

    return clone;
};

const update = (content) => {
    const update = document.querySelector("#content-update");
    const clone = document.importNode(update.content, true);
    const input = clone.querySelector("span > input");
    input.value = content;

    return clone;
};

const create = (item) => {
    const template = document.querySelector("#commentRow");
    const clone = document.importNode(template.content, true);
    const ul = clone.querySelector("ul");
    const li = clone.querySelectorAll("li");

    ul.dataset.index = item.id;
    li[0].innerHTML = item.userid;
    li[1].append(box(item.content));
    li[2].innerHTML = item.register;

    return ul;
};

const drawing = (item) => {
    const list = document.querySelector("#comment-list");
    list.append(item);
};

const getall = async () => {
    const allList = await axios.get("http://localhost:3000/comments");

    for (const list of allList.data) {
        const item = create(list);
        drawing(item);
    }
};

const formHandler = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    const result = await axios.post("http://localhost:3000/comments", { content });
    const add = create(result.data);
    drawing(add);

    e.target.reset();
    e.target.content.focus();
};

const clickHandler = async (e) => {
    const dataset = e.target.parentNode.parentNode.dataset.index;
    if (e.target.className === "comment-update-btn") {
    } else if (e.target.className === "comment-delete-btn") {
        console.log(dataset);
    }
};

form.addEventListener("submit", formHandler);
reply.addEventListener("click", clickHandler);

(async () => {
    getall();
})();

