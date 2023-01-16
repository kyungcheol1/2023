// const mysql = require("../models");
// const repository = require("./comment.repository")(mysql);
// const service = require("./comment.service")(repository);
// repository.findAll().then((data) => console.log(data));
// service.list().then((data) => console.log(data));
const config = require("../config");
const mysql = require("../models");
console.log(mysql);
const CommentRepository = require("./comment.repository");
const CommentService = require("./comment.service");
const CommentController = require("./comment.controller");

const repository = new CommentRepository({ mysql });
// console.log(repository);
const service = new CommentService({ commentRepository: repository, config }); //의존성 주입 중요

const controller = new CommentController({ commentService: service });
// console.log(service);
// console.log(controller);
module.exports = {
    repository,
    service,
    controller,
};

