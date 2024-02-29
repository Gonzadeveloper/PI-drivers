const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id:{
      type: DataTypes.UUID, // Cambiamos el tipo de dato a UUID
      defaultValue: DataTypes.UUIDV4, // Agregamos un valor por defecto para generar el UUID
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Establece el valor por defecto como la fecha actual
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Establece el valor por defecto como la fecha actual
      allowNull: false,
    },
  }, {
    timestamps: false, // Desactivar las columnas createdAt y updatedAt
  });
};