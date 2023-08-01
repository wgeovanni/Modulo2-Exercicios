const { connection } = require('../database/connection');
const { STRING, DATE } = require('sequelize');

const Category = connection.define('category', {
    name: {
        type: STRING,
        allowNull: false
    },
    createdAt: {
        type: DATE,
        allowNull: false
    },
    updatedAt: {
        type: DATE,
        allowNull: false
    }
},
    { underscored: true, paranoid: true });

module.exports = {
    Category
}