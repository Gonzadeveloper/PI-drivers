const { Sequelize } = require('sequelize');
const { DATABASE_URL, DATABASE_URL_TEST, NODE_ENV } = process.env

const DATABASE = NODE_ENV === "test"
? DATABASE_URL_TEST
: DATABASE_URL;

const sequelize = new Sequelize(DATABASE, {
  dialect: 'postgres',
  logging: false, // Cambiar a true si quieres ver los logs de Sequelize en la consola.
});

module.exports = sequelize;