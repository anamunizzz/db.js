// User.js

const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: { // Novo campo
    type: DataTypes.INTEGER,
    allowNull: false
  },
  profissao: { // Novo campo
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;

