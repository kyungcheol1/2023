const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./route/replyroute");

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3000, () => {
    console.log("backserver start");
});

