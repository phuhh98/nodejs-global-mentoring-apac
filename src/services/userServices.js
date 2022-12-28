class Users {
    static instance;
    #store = [];
    constructor() {}
    static getInstance() {
        if (!Users.instance) {
            Users.instance = new Users();
        }

        return Users.instance;
    }
    getStore() {
        return this.#store;
    }

    addUser(user) {
        const foundUser = this.findUserByLogin(user.login);
        if (!foundUser) {
            this.#store.push(user);
            return user;
        } else {
            return new Error('login is existed');
        }
    }
    findUserById(userId) {
        const user = this.#store.find(user => user.id === userId);
        return !!user ? user : false;
    }
    findIndexById(userId) {
        const index = this.#store.findIndex(user => user.id === userId);
        return index;
    }

    findUserByLogin(userLogin) {
        const user = this.#store.find(user => user.login === userLogin);
        return !!user ? user : false;
    }

    updateUserById(userId, payload) {
        let userIndex = this.findIndexById(userId);
        if (userIndex >= 0) {
            this.#store[userIndex] = { ...this.#store[userIndex], ...payload };
            return this.#store[userIndex];
        } else {
            return new Error("user does not exist in this services's store");
        }
    }

    markAsDeletedById(userId) {
        const userIndex = this.findIndexById(userId);
        if (userIndex >= 0) {
            this.#store[userIndex].isDeleted = true;
            return this.#store[userIndex];
        } else {
            return new Error('Delete unsuccessfully: user does not exist');
        }
    }

    getAutoSuggestUsers(loginSubstring, limit) {
        const limitedUserList = this.getStore()
            .filter(
                user =>
                    user.login
                        .toLowerCase()
                        .indexOf(loginSubstring.toLowerCase()) !== -1
            )
            .sort((userA, userB) => (userA.login > userB.login ? 1 : -1))
            .slice(0, limit - 1);
        console.log(limitedUserList);
        return limitedUserList;
    }
}

module.exports = Users;

/*
type User = {
	id : string
	login: string
	password: string
	age: number
	isDeleted: boolean
}
*/
