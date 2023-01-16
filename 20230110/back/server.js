require("dotenv").config(); // dotenv에 저장된 데이터를 읽어오고 config > 실행을 시킨다.
const express = require("express");
const app = express();
const port = process.env.PORT;
const route = require("./routes");
const config = require("./config");
const HttpException = require("./exceptions/HTTPException");
const { sequelize } = require("./models");

app.use(express.json());
app.use(route);
app.use((error, req, res, next) => {
    if (error instanceof HttpException) {
        res.json({
            isError: true,
            message: error.message,
            status: error.status,
        });
    } else if (error instanceof Error) {
        res.json({
            isError: true,
            message: error.message,
        });
    }

    if (error instanceof Error) {
        //11:00 다시듣기 type of맨끝에서부터 instanceof 맨 앞부터 찾는다
    }
});

app.listen(config.port, async () => {
    await sequelize.sync({ force: false }); // model 객체를 가지고 query를 써주는 것 실제 db에 있으면 true > 있어도 새로 써주는것 false > 있으면 그냥 return
    console.log(`back start ${config.port}`);
});

