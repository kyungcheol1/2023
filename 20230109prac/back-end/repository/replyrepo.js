const mysql = require("../model/index");

exports.getreply = async () => {
    let sql = `SELECT * FROM Comment`;
    const [respone] = await mysql.query(sql);
    return respone;
};

exports.postreply = async (id, content) => {
    let sql = `INSERT INTO Comment(userid, content) VALUE("${id}", "${content}")`;
    const [{ insertId }] = await mysql.query(sql);
    const [[respone]] = await mysql.query(`SELECT id, userid, content, DATE_FORMAT(register, '%Y-%m-%d')as regiter FROM Comment WHERE id="${insertId}"`);
    return respone;
};

exports.putreply = async (id, content) => {
    let sql = `UPDATE Comment SET content='${content}' WHERE id=${id}`;
    const [{ affectedRows }] = await mysql.query(sql);
    return affectedRows;
};

exports.deletereply = async (id) => {
    let sql = `DELETE FROM Comment WHERE id=${id}`;
    await mysql.query(sql);
};

