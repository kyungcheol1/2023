const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./models/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// register, "%Y-%M-%D";
app.get("/comments", async (req, res, next) => {
    try {
        const [response] = await pool.query(`SELECT id, userid, content, DATE_FORMAT (register,'%y-%m-%d %h:%i') as register FROM Comment`);
        const result = response.map((v) => {
            return {
                ...v,
                updated: false,
            };
        });
        res.send(result);
    } catch (e) {
        next(e);
    }
});

app.post("/comments", async (req, res, next) => {
    try {
        const userid = "web7722";
        const { content } = req.body;
        if (!userid) throw new Error("userid가 없습니다."); // try catch에서 throw 를 만나면 catch로 간다 if의 false와 같음
        if (!content) throw new Error("contnet 없슴!");
        const sql = `INSERT INTO Comment(userid, content) VALUES("${userid}","${content}")`;
        const [{ insertId }] = await pool.query(sql);
        const [[response]] = await pool.query(`SELECT id, userid, content, DATE_FORMAT (register,'%y-%m-%d %h:%i') as register FROM Comment WHERE id=${insertId}`);
        response.updaped = false;
        res.json(response);
    } catch (e) {
        console.log(e);
        next(e);
    }
});

app.get("/comments/:id", (req, res, next) => {
    try {
        res.send("게시글 하나 가져오기");
    } catch (e) {}
});

app.put("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const sql = `UPDATE Comment SET content = "${content}" WHERE id=${id};`;
        await pool.query(sql);
        res.json("asdasfaf");
    } catch (e) {}
});

app.delete("/comments:id", (req, res, next) => {
    try {
        res.send("게시글 삭제하기");
    } catch (e) {}
});

app.use((error, req, res, next) => {
    console.log(error.message);
    res.send(`ERROR ${error}`);
});

app.listen(3000, () => {
    console.log("back server start");
});

// `id``userid``content``register`;

