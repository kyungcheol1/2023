const replyrepo = require("../repository/replyrepo");

exports.getreply = async () => {
    const respone = await replyrepo.getreply();
    console.log(respone);
    return respone;
};

exports.postreply = async (id, content) => {
    const respone = await replyrepo.postreply(id, content);
    return respone;
};

exports.putreply = async (id, content) => {
    const respone = await replyrepo.putreply(id, content);
    return respone;
};

exports.deletereply = async (id) => {
    const respone = await replyrepo.deletereply(id);
    return respone;
};

