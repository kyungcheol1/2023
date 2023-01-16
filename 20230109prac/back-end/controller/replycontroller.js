const replyservice = require("../service/replyservise");

exports.getreply = async (req, res, next) => {
    const respone = await replyservice.getreply();
    res.send(respone);
};

exports.postreply = async (req, res, next) => {
    const { id } = req.body;
    const { content } = req.body;
    const respone = await replyservice.postreply(id, content);
    res.send(respone);
};

exports.putreply = async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;
    const respone = await replyservice.putreply(id, content);
    res.send(respone);
};

exports.delete = async (req, res, next) => {
    const { id } = req.params;
    const respone = await replyservice.deletereply(id);
    res.send(respone);
};

