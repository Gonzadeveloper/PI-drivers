const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Driver = require("./Driver");
const Teams = require("./Teams");
const relations_table = require('./relations_table')

const models = {
  Driver: Driver(sequelize, Sequelize.DataTypes),
  Teams: Teams(sequelize, Sequelize.DataTypes),
  relations_table: relations_table(sequelize, Sequelize.DataTypes)
};


module.exports = {
  sequelize,
  ...models,
};