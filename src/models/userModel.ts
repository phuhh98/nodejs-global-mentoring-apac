import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes
} from 'sequelize';
import sequelize from '../loaders/dbLoader';

export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    declare id: string;
    declare login: string;
    declare password: string;
    declare age: number;
    declare isDeleted: boolean;
}
User.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    { sequelize, tableName: 'users', timestamps: false }
);

User.sync()
    .then(res => console.log('User model sync complete'))
    .catch(err => console.error('User model sync complete with error', err));
