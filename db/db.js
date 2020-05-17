const Sequelize = require('sequelize');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

let db;

if (process.env.DATABASE_URL) {
    console.log('prod');
    db = new Sequelize(process.env.DATABASE_URL, {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })
} else {
    db = new Sequelize({
        database: process.env.DB,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: 'localhost',
        dialect: 'postgres'
    })
}

module.exports = db