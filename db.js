// db.js
/*
npm init -y
npm install sequelize mysql2
*/
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
