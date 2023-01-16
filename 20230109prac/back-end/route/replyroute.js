const express = require("express");
const router = express.Router();
const replycontrol = require("../controller/replycontroller");

router.get("/comments", replycontrol.getreply);
router.post("/comments", replycontrol.postreply);
router.put("/comments/:id", replycontrol.putreply);
router.delete("/comments/:id", replycontrol.delete);

module.exports = router;

