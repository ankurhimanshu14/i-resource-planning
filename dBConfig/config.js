require('dotenv').config();

const config = {
    localhost: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

module.exports = config;