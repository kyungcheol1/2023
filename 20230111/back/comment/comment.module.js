const { sequelize } = require("../models");
const CommentRepository = require("./comment.repository");
const CommentService = require("./comment.service");
const CommentController = require("./comment.controller");

const repo = new CommentRepository({ sequelize });
const service = new CommentService({ repo: repo });
const controller = new CommentController({ service: service });

// console.log(controller);
module.exports = {
    repository: repo,
    service,
    controller,
};

