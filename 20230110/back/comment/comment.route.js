const express = require("express");
const router = express.Router();
const { controller } = require("./comment.module");

router.get("/", (req, res, next) => controller.getList(req, res, next)); // this 가 바뀌기 때문에 //closer 사용 // req,res next가 필요

module.exports = router;

