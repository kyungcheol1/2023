const express = require("express");
const app = express();
const pool = require("./models/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/comments", async (req, res) => {
    const [listAll] = await pool.query(`SELECT * FROM Comment`);
    res.send(listAll);
});

app.post("/comments", async (req, res) => {
    try {
        // const { userid } = req.cookies;
        const { content } = req.body;
        if (!content) throw new Error("contnet 없슴!");
        let sql = `INSERT INTO Comment(userid, content) VALUE("web1234", "${content}")`;
        const [{ insertId }] = await pool.query(sql);
        const [[one]] = await pool.query(`SELECT id, userid, content, DATE_FORMAT (register,'%y-%m-%d %h:%i') as register FROM Comment WHERE id=${insertId}`);
        res.json(one);
    } catch (e) {}
});

app.listen(3000, () => {
    console.log("back server start");
});

