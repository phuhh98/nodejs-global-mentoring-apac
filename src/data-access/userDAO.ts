import { Op } from 'sequelize';
import { User } from '../models';

export interface IUser {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
}

export class UserDAO {
    static instance: UserDAO;
    private userModel: typeof User;
    constructor(userModel: typeof User) {
        this.userModel = userModel;
    }
    static getInstance(): UserDAO {
        if (!UserDAO.instance) {
            UserDAO.instance = new UserDAO(User);
        }
        return UserDAO.instance;
    }
    async findByLogin(userLogin: IUser['login']): Promise<IUser | null> {
        const user = await this.userModel.findOne({
            where: { login: userLogin }
        });
        return !!user ? user.dataValues : null;
    }

    async findById(userId: IUser['id']): Promise<IUser | null> {
        const user = await this.userModel.findOne({ where: { id: userId } });
        return !!user ? user.dataValues : null;
    }

    async createUser(user: IUser): Promise<IUser | null> {
        const newUser = new this.userModel(user);
        try {
            await newUser.save();
        } catch (err) {
            if (err) {
                return null;
            }
        }
        return user;
    }

    async updateById(
        userId: IUser['id'],
        payload: IUser
    ): Promise<IUser | false> {
        const user: User | null = await this.userModel.findOne({
            where: { id: userId }
        });
        if (user === null) {
            return false;
        }
        try {
            await user.update({ ...payload });
        } catch (err) {
            return false;
        }
        return user.dataValues as IUser;
    }

    async markAsDeleted(userId: IUser['id']): Promise<IUser | false> {
        const user: User | null = await this.userModel.findOne({
            where: { id: userId }
        });
        try {
            await user?.update({ isDeleted: true });
        } catch (err) {
            return false;
        }
        return user?.dataValues as IUser;
    }

    async findWithLoginAndLimit(
        loginSubstring: string,
        limit: number
    ): Promise<IUser[] | null> {
        const resultUserList = await this.userModel.findAll({
            where: {
                login: {
                    [Op.iLike]: `%${loginSubstring}%`
                }
            },
            limit,
            order: [['login', 'ASC']]
        });

        if (!resultUserList) {
            return null;
        }
        return resultUserList;
    }
}
