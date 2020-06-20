const { UUID, UUIDV4, STRING, DECIMAL } = require('sequelize');
const { db } = require('../db');

const Company = db.define('company', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        unique: true
    }
});

module.exports = Company;