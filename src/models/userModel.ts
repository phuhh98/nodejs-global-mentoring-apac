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
    declare username: string;
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
        username: {
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
    { sequelize, tableName: 'users' /*timestamps: false */ }
);

User.sync()
    .then(res => console.log('sync complete', res))
    .catch(err => console.error('sync complete with error', err));

const user = new User({
    id: '67006adb-3c81-4b9a-9315-f4cddb2c935b',
    username: 'drenny0',
    password: 'vgeaddLa',
    age: 110,
    isDeleted: true
});

user.save()
    .then(res => console.log('save success', res))
    .catch(err => console.log('save failed', err));
