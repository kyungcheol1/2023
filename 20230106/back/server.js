const express = require("express");
const app = express();
const pool = require("./models");
const cors = require("cors");

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use(express.json());

app.get("/comments", async (req, res, rext) => {
    try {
        const [respone] = await pool.query(`SELECT id, userid, content, DATE_FORMAT(register, '%Y-%m-%d')as regiter FROM Comment`);
        res.json(respone);
    } catch (e) {
        next(e);
    }
});

app.post("/comments", async (req, res, rext) => {
    try {
        const userid = "web7722";
        const { content } = req.body;

        if (!content) throw new Error("Content 없음");

        const [{ insertId }] = await pool.query(`INSERT INTO Comment(userid, content) VALUE("${userid}","${content}")`);
        const [respone] = await pool.query(`SELECT id, userid, content, DATE_FORMAT(register, '%Y-%m-%d')as regiter FROM Comment WHERE id="${insertId}"`);
        res.json(respone);
    } catch (e) {
        next(e);
    }
});

app.get("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const [[response]] = await pool.query(`SELECT id, userid, content, DATE_FORMAT(register, '%Y-%m-%d')as regiter FROM Comment WHERE id=${id}`);
        if (!response) throw new Error("content 없음");
        res.json(response);
    } catch (e) {
        next(e);
    }
});

app.put("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { content } = req.body;

        const [{ changedRows }] = await pool.query(`UPDATE Comment SET content='${content}' WHERE id=${id}`);
        if (changedRows <= 0) throw new Error("수정된 데이터가 없습니다");
        res.json({ result: changedRows });
    } catch (e) {
        next(e);
    }
});

app.delete("/comments/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const [{ affectedRows }] = await pool.query(`DELETE FROM Comment WHERE id=${id}`);
        console.log(affectedRows);

        if (affectedRows <= 0) throw new Error("삭제된 데이터가 없습니다");
        res.json({ affectedRows });
    } catch (e) {
        next(e);
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
    });
});

app.listen(3000, () => {
    console.log("back start");
});

