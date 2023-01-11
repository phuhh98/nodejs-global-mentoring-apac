import { UserDAO, IUser } from '../data-access';

export class UserService {
    static instance: UserService;
    private userDAO: UserDAO;
    constructor(userDAO: UserDAO) {
        this.userDAO = userDAO;
    }
    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService(UserDAO.getInstance());
        }

        return UserService.instance;
    }

    async addUser(user: IUser): Promise<IUser | Error> {
        const foundUser = await this.findUserByLogin(user.login);
        if (!foundUser) {
            try {
                await this.userDAO.createUser(user);
            } catch (err) {
                return new Error('db error');
            }
        } else {
            return new Error('login is existed');
        }
        return user;
    }
    async findUserById(userId: IUser['id']): Promise<IUser | false> {
        const foundUser = await this.userDAO.findById(userId);
        return !!foundUser ? foundUser : false;
    }

    async findUserByLogin(userLogin: IUser['login']): Promise<IUser | false> {
        const foundUser = await this.userDAO.findByLogin(userLogin);
        return !!foundUser ? foundUser : false;
    }

    async updateUserById(
        userId: IUser['id'],
        payload: IUser
    ): Promise<IUser | Error> {
        const updateResult: IUser | boolean = await this.userDAO.updateById(
            userId,
            payload
        );
        if (!updateResult) {
            return new Error('db error on update');
        }
        return updateResult;
    }

    async markAsDeletedById(userId: IUser['id']): Promise<IUser | Error> {
        const deleteResult = await this.userDAO.markAsDeleted(userId);
        if (deleteResult) {
            return deleteResult as IUser;
        }
        return new Error('Delete unsuccessfully: user does not exist');
    }

    async getAutoSuggestUsers(
        loginSubstring: string,
        limit: number = 5
    ): Promise<Array<IUser>> {
        let limitedUserList = await this.userDAO.findWithLoginAndLimit(
            loginSubstring,
            limit
        );
        if (limitedUserList === null) {
            limitedUserList = [];
        }
        return limitedUserList;
    }
}
