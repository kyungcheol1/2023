const express = require("express");
const router = express.Router();
const { controller } = require("./comment.module");

router.get("/", (req, res, next) => controller.getlist(req, res, next)); // this 가 바뀌기 때문에 //closer 사용 // req,res next가 필요
router.post("/", (req, res, next) => controller.create(req, res, next));

module.exports = router;

