const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Driver = sequelize.define('Driver', {
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
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return Driver;  // Devuelve el modelo correctamente
};
