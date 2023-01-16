class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async signup({ userid, userpw, username }) {
        try {
            const respone = await this.userRepository.addUser({ userid, userpw, username });
            return respone;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = UserService;

