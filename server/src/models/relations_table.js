// relations_table.js

module.exports = (sequelize, DataTypes) => {
    const RelationsTable = sequelize.define('relations_table', {
      driverId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Drivers', // Relacionamos con la tabla Drivers
          key: 'id',        // La clave primaria de la tabla Drivers
        },
      },
      teamId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Teams',   // Relacionamos con la tabla Teams
          key: 'id',        // La clave primaria de la tabla Teams
        },
      },
    });
  
    return RelationsTable;
  };
  