const { Driver, relations_table, Teams } = require('../models/index'); // Asegúrate de importar tus modelos

async function getDrivers(req, res) {
  try {
    // Obtener todos los conductores
    const drivers = await Driver.findAll({
      attributes: [
        'id',
        'name',
        'last_name',
        'description',
        'image',
        'birthdate',
        'nationality',
      ],
    });

    // Obtener todas las relaciones desde la tabla de relaciones
    const relations = await relations_table.findAll();

    // Obtener todos los equipos
    const teams = await Teams.findAll();

    // Vincular las relaciones y los equipos con los conductores
    const driversWithTeamNames = drivers.map((driver) => {
      // Encuentra los IDs de los equipos relacionados con el conductor actual
      const driverTeamIds = relations
        .filter((relation) => relation.driverId === driver.id) // Filtrar relaciones del conductor
        .map((relation) => relation.teamId); // Extraer los teamIds

      // Encuentra los nombres de los equipos que coincidan con los IDs relacionados
      const teamNames = teams
        .filter((team) => driverTeamIds.includes(team.id)) // Filtrar equipos relacionados
        .map((team) => team.name); // Extraer solo el nombre del equipo

      // Retornar el conductor con su lista de nombres de equipos
      return {
        ...driver.toJSON(), // Convertir el modelo del conductor a un objeto plano
        teams: teamNames, // Solo incluir los nombres de los equipos
      };
    });

    res.json(driversWithTeamNames); // Retornar el resultado
  } catch (error) {
    console.error('Error al obtener los drivers con nombres de equipos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { getDrivers };
