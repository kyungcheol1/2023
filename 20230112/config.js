const config = {
    db: {
        username: "root",
        password: "Qjel216!",
        host: "127.0.0.1",
        port: "3306",
        database: "TEST",
        dialect: "mysql", // 어떤 db를 사용할 것인지
        define: {
            freezeTableName: true,
            timestamps: false,
        },
    },
};

module.exports = config;

