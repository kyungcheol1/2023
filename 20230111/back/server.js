const express = require("express");
const config = require("./config");
const { sequelize } = require("./models");
const app = express();
const cors = require("cors");
const PORT = config.port;
const router = require("./routes");

app.use(express.json());
app.use(cors());
app.use(router);

// app.use((err, req, res, next) => {
//     res.send("ERROR");
// });

app.listen(PORT, async () => {
    await sequelize.sync({ force: false });

    // console.log(sequelize.models); // User와 Commets 가 모델에 있다
    // const Comment = sequelize.models.Comment;
    // const result = await Comment.create({ userid: "Web7722", content: "hello hello" });
    // await Comment.create({ userid: "Web7722", content: "hello hello1" });
    // await Comment.create({ userid: "Web7722", content: "hello hello2" });
    // await Comment.create({ userid: "Web7722", content: "hello hello3" });
    // await Comment.create({ userid: "Web7722", content: "hello hello4" });

    // const selectAll = await Comment.findAll();
    // //findOne은 Limit 1을 꼭 붙여준다
    // const selectOne = await Comment.findOne({ where: { userid: "web7722" } });
    // // 못찾으면 null 반환한다

    // console.log(selectAll, "all", selectOne, "One");
    // //1. 바꿀내용들, 2.where
    // const update = await Comment.update({ userid: "web8855", content: "수정" }, { where: { id: 3 } });
    // console.log("=========", update);
    // // 못바꾸면 0값 반환 // 바꾸면 배열 [1]로 준다 쓸꺼면 배열 풀어서 리턴하면 될듯

    // const del = await Comment.destroy({ where: { id: 6 } });
    // //리턴값 그냥 1 배열1 아닌 그냥 1 // 못찾으면 0
    // console.log("asdasdasd", del);

    // const query = await sequelize.query("sql 쿼리문작성하면 됨")
    console.log("back server start");
});

