const { UUID, UUIDV4, STRING, DECIMAL } = require('sequelize');
const { db } = require('../db');

const Offering = db.define('offering', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    price: {
        type: DECIMAL,
        defaultValue: 0
    }
});

module.exports = Offering;