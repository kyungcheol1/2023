const express = require("express");
const app = express();
const nunjucke = require("nunjucks");

app.set("view engine", "html");
nunjucke.configure("views", { express: app });
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res, next) => {
    res.render("index");
});

app.listen(3005, () => {
    console.log("front start");
});

