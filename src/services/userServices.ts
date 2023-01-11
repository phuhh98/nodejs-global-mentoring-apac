interface User {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
}

export default class UserService {
    static instance: UserService;
    private store: Array<User> = [];
    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }

        return UserService.instance;
    }
    getStore(): Array<User> {
        return this.store;
    }

    addUser(user: User): User | Error {
        const foundUser = this.findUserByLogin(user.login);
        if (!foundUser) {
            this.store.push(user);
        } else {
            return new Error('login is existed');
        }
        return user;
    }
    findUserById(userId: User['id']): User | boolean {
        const foundUser = this.store.find(user => user.id === userId);
        return !!foundUser ? foundUser : false;
    }
    findIndexById(userId: User['id']): number {
        const index = this.store.findIndex(user => user.id === userId);
        return index;
    }

    findUserByLogin(userLogin: User['login']): User | boolean {
        const foundUser = this.store.find(user => user.login === userLogin);
        return !!foundUser ? foundUser : false;
    }

    updateUserById(userId: User['id'], payload: User): User | Error {
        const userIndex = this.findIndexById(userId);
        if (userIndex >= 0) {
            this.store[userIndex] = { ...this.store[userIndex], ...payload };
        } else {
            return new Error("user does not exist in this services's store");
        }
        return this.store[userIndex];
    }

    markAsDeletedById(userId: User['id']): User | Error {
        const userIndex: number = this.findIndexById(userId);
        if (userIndex >= 0) {
            this.store[userIndex].isDeleted = true;
        } else {
            return new Error('Delete unsuccessfully: user does not exist');
        }
        return this.store[userIndex];
    }

    getAutoSuggestUsers(loginSubstring: string, limit = 5): Array<User> {
        const limitedUserList = this.getStore()
            .filter(
                user =>
                    user.login
                        .toLowerCase()
                        .indexOf(loginSubstring?.toLowerCase()) !== -1
            )
            .sort((userA, userB) => (userA.login > userB.login ? 1 : -1))
            .slice(0, limit);
        return limitedUserList;
    }
}
