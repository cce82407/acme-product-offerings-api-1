const Sequelize = require('sequelize');

const DB_URL = process.env.DB_URL || 'postgres://localhost:5432/acme_product_offerings';

const db = new Sequelize(DB_URL);

module.exports = {
    db
}   