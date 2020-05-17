const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db