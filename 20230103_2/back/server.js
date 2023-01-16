const express = require("express");
const app = express();
const cors = require("cors");

const user = [{ idx: 1, userid: "web7722", userpw: "1234", username: "ceil", gender: "남자" }];

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use("/", (req, res) => {});

//list
app.get("/users", (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    // res.setHeader("Access-Control-Allow-Headers", "Content-type");
    res.json(user);
});

//write
app.post("/users", (req, res) => {
    const { userid, userpw, username, gender } = req.body;
    console.log(req);
    const response = { idx: user[user.length - 1].idx + 1, userid, userpw, username, gender };
    console.log(response);
    user.push(response);
    res.json(response);
});

//view
app.get("/users/:idx", (req, res) => {
    const { idx } = req.params;
    const [response] = user.filter((v) => v.idx === parseInt(idx));
    // console.log(response);
    res.json(response);
});

app.listen(3000, () => {
    console.log("server start");
});

// GET /board/list
// POST /board/write
// GET /board/view
// POST /board/modify
// POST /board/delete

// GET /boards/list
// POST /boards/write
// GET /boards/view
// POST /boards/modify
// POST /boards/delete

// GET /boards  >> list
// POST /boards >>> write
// GET /boards/1 >>> view
// PUT /boards  >>> modify
// DELETE /boards >>> delete

// 라우터 파라미터 /boards/:id 쿼리스트링이랑 사용 용도가 흡사하다 항상 맨 아래에 놔야 실행이 잘된다
// path문에 동사가 들어가면 안된다. 이미 메서드로 가져오기 때문에 refull api

// 이렇게 s 하나씩 붙여서 복수형으로 만든다

//PUT 요청된 자원을 수정하기 위해 사용
//DELETE 요청된 자원을 삭제하기 위해 사용

