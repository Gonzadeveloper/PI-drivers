const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Teams = sequelize.define('Teams', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // Asigna un UUID como ID por defecto
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Teams;  // Devuelve el modelo correctamente
};
