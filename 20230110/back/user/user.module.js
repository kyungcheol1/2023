const {
    sequelize: {
        models: { User }, //맨 마지막에 쓴 아이만 뽑힌다.
    },
} = require("../models");
const userRepository = require("./user.repository");

const repository = new userRepository({ User });

// repository.addUser({});

repository.getUserByUserid({ userid: "asdf" }).then((data) => {
    console.log(data);
});

