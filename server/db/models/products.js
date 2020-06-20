const { UUID, UUIDV4, STRING, DECIMAL } = require('sequelize');
const { db } = require('../db');

const Product = db.define('product', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    suggestedPrice: {
        type: DECIMAL,
        defaultValue: 0
    }
});

module.exports = Product;