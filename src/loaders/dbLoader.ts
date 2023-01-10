const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.SQL_DBNAME,
    process.env.SQL_USER,
    process.env.SQL_PWD,
    {
        host: process.env.SQL_HOST,
        dialect: process.env.SQL_DBSYS,
        logging: false
    }
);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();

export default sequelize;
