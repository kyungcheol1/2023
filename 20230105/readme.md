# client

요청 잘 보내고 잘 받기

# server

alert("연결");

// const request = ({ method, path, body }) => {
// return new Promise((resolve, reject) => {
// const host = `http://localhost:3000`;
// const xhr = new XMLHttpRequest();
// xhr.open(method, `${host}${path}`);
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.send(JSON.stringify(body));

// xhr.onload = () => {
// if (xhr.readyState === 4 && xhr.status === 200) {
// resolve(JSON.parse(xhr.response));
// } else {
// reject("ERR");
// }
// };
// });
// };
(async () => {
// XMLHttpResponse javascript 내장
// const ajax = await request({ method: "get", path: "/comments", body: null });
// console.log(ajax);

    // Fetch javascript 내장
    const respones = await fetch("http://localhost:3000/comments", {
        method: "get",
        headers: {
            "Content-type": "application/json",
        },
        body: null,
    });

    console.log(respones);
    const body = await respones.json();
    console.log(body);

    // axios 외부모듈
    const res = await axios.get("http://localhost:3000/comments");
    const res2 = await axios.post("http://localhost:3000/comments", { content: "asdfgh" });
    console.log(res.data);
    console.log(res2);

})();

