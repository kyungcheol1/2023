const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

app.set("view engine", "html");
nunjucks.configure("views", { express: app });
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post("/ajax", (req, res) => {
    console.log("POST / AJAX 요청");
    const userid = req.body.userid;
    let flag = true;
    if (userid === undefined) flag = false;
    console.log(req.body.userid);
    res.send(`${flag}`);
});

app.get("/ajax", (req, res) => {
    console.log("GET / AJAX 요청 ");
    const userid = req.query.userid;
    let flag = true;
    if (userid === undefined) flag = false;
    res.send(`${flag}`);
});

app.listen(3000, () => {
    console.log("server start");
});

