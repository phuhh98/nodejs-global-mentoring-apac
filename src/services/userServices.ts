interface User {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
}

export default class Users {
    static instance;
    private store: Array<User> = [];
    constructor() {}
    static getInstance() {
        if (!Users.instance) {
            Users.instance = new Users();
        }

        return Users.instance;
    }
    getStore() {
        return this.store;
    }

    addUser(user) {
        const foundUser = this.findUserByLogin(user.login);
        if (!foundUser) {
            this.store.push(user);
        } else {
            return new Error('login is existed');
        }
        return user;
    }
    findUserById(userId) {
        const foundUser = this.store.find(user => user.id === userId);
        return !!foundUser ? foundUser : false;
    }
    findIndexById(userId) {
        const index = this.store.findIndex(user => user.id === userId);
        return index;
    }

    findUserByLogin(userLogin) {
        const foundUser = this.store.find(user => user.login === userLogin);
        return !!foundUser ? foundUser : false;
    }

    updateUserById(userId, payload) {
        const userIndex = this.findIndexById(userId);
        if (userIndex >= 0) {
            this.store[userIndex] = { ...this.store[userIndex], ...payload };
        } else {
            return new Error("user does not exist in this services's store");
        }
        return this.store[userIndex];
    }

    markAsDeletedById(userId) {
        const userIndex = this.findIndexById(userId);
        if (userIndex >= 0) {
            this.store[userIndex].isDeleted = true;
        } else {
            return new Error('Delete unsuccessfully: user does not exist');
        }
        return this.store[userIndex];
    }

    getAutoSuggestUsers(loginSubstring, limit) {
        const limitedUserList = this.getStore()
            .filter(
                user =>
                    user.login
                        .toLowerCase()
                        .indexOf(loginSubstring?.toLowerCase()) !== -1
            )
            .sort((userA, userB) => (userA.login > userB.login ? 1 : -1))
            .slice(0, limit - 1);
        return limitedUserList;
    }
}
