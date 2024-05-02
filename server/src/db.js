require("dotenv").config();
const { Sequelize } = require("sequelize");
const drivers = require('./models/Driver')
const teams = require('./models/Teams')


const {
  DB
} = process.env;

const sequelize = new Sequelize(DB, {
  logging: false, 
});

const { Driver, Teams } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Teams.belongsToMany(Driver, {through:"relations_table"})
Driver.belongsToMany(Teams, {through:"relations_table"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};