const getbtn = document.querySelector("#ajax_get");
const postbtn = document.querySelector("#ajax_post");
const span = document.querySelector("#msg");

//XMLHttpRequest 요청
const xhr = new XMLHttpRequest();
console.dir(xhr);

// open:()={}, setRequestHeader:()=>{}, send:()=>{}, onload:()=>{}
getbtn.addEventListener("click", () => {
    xhr.open("get", "http://localhost:3000/ajax");
    xhr.setRequestHeader("Content-type", "application/x-www-from-urlencoded");

    xhr.send();

    xhr.onload = () => {
        // console.log(xhr.readyState, xhr.status, xhr.response);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.response;
            if (response === "true") {
                span.style.color = "red";
                span.innerHTML = "아이디가 중복되었습니다 ";
            } else {
                span.style.color = "green";
                span.innerHTML = "사용 가능한 아이디 입니다";
            }
        }
    };
});

postbtn.addEventListener("click", () => {
    xhr.open("POST", "http://localhost:3000/ajax");
    xhr.setRequestHeader("Content-type", "application/json");
    const data = { userid: "web7722" };
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
        // console.log(xhr.readyState, xhr.status, xhr.response);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.response;
            if (response === "true") {
                span.style.color = "red";
                span.innerHTML = "아이디가 중복되었습니다 ";
            } else {
                span.style.color = "green";
                span.innerHTML = "사용 가능한 아이디 입니다";
            }
        }
    };
});

