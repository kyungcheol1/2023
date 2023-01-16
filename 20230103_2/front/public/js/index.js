const ajax_get = document.querySelector("#ajax_get");
const ajax_post = document.querySelector("#ajax_post");
const msg = document.querySelector("#msg");
const userbtn = document.querySelector("#userbtn");
const userlist = document.querySelector("#userlist");

// request({ method: "get", path: "/users/5", body: "" }, callback);
const request = ({ method, path, body }, callback) => {
    const host = "http://localhost:3000";
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${host}${path}`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(body));

    xhr.onload = () => {
        callback(xhr.response);
    };
};

ajax_get.addEventListener("click", () => {
    const view = (xhr) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
        }
    };

    request({ method: "get", path: "/users/1" }, view);
    // xhr.open("get", "http://localhost:3000/users");
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.send();
    // xhr.onload = () => {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log(xhr.response);
    //     }
    // };
});

ajax_post.addEventListener("click", () => {
    request({ method: "post", path: "/users" }, (response) => {
        console.log(response);
    });
    // xhr.open("post", "http://localhost:3000/users");
    // xhr.setRequestHeader("Content-type", "application/json");
    // const data = {
    //     userid: "web7722",
    //     userpw: "1234",
    //     username: "cheol",
    //     gender: "남자",
    // };
    // xhr.send(JSON.stringify(data));
    // xhr.onload = () => {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log(xhr.response);
    //     }
    // };
});

const card = ({ idx, userid, userpw, username, gender }) => {
    const ulElement = document.createElement("ul");
    const idxElement = document.createElement("li");
    const idElement = document.createElement("li");
    const pwElement = document.createElement("li");
    const nameElement = document.createElement("li");
    const genderElement = document.createElement("li");

    idxElement.innerHTML = idx;
    idElement.innerHTML = userid;
    pwElement.innerHTML = userpw;
    nameElement.innerHTML = username;
    genderElement.innerHTML = gender;

    ulElement.append(idxElement);
    ulElement.append(idElement);
    ulElement.append(pwElement);
    ulElement.append(nameElement);
    ulElement.append(genderElement);
    userlist.append(ulElement);
};

request({ method: "get", path: "/users" }, (response) => {
    const arr = JSON.parse(response);
    console.log(arr);
    arr.forEach((v) => {
        card(v);
    });
});

userbtn.addEventListener("click", () => {
    request({ method: "post", path: "/users", body: { userid: "web7722", userpw: "1234", username: "cheol", gender: "남자" } }, (response) => {
        card(JSON.parse(response));
    });
});

