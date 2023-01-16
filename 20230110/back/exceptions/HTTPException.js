//예외처리 코드
class HttpException extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

module.exports = HttpException;

