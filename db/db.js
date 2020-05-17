const Sequelize = require('sequelize');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

let db;

if (process.env.DATABASE_URL) {
    db = new Sequelize({
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
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