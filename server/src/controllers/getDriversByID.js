const { Driver, relations_table, Teams } = require('../models/index'); // Importa los modelos

async function getDriverById(req, res) {
  const { id } = req.params;

  try {
    // Obtener el conductor por ID
    const driver = await Driver.findByPk(id, {
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

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found in database' });
    }

    // Obtener las relaciones de este conductor desde la tabla intermedia
    const relations = await relations_table.findAll({
      where: { driverId: driver.id }, // Filtrar relaciones por el ID del conductor
    });

    // Obtener todos los equipos
    const teams = await Teams.findAll();

    // Encontrar los nombres de los equipos relacionados con este conductor
    const team = relations
      .map((relation) => {
        const team = teams.find((team) => team.id === relation.teamId); // Relacionar por ID
        return team ? team.name : null; // Retornar el nombre si existe
      })
      .filter(Boolean); // Remover null o undefined si no hay coincidencias

    // Formatear el conductor con su lista de equipos
    const formattedDriver = {
      ...driver.toJSON(),
      team,
    };

    res.status(200).json(formattedDriver);
  } catch (error) {
    console.error('Error fetching driver by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { getDriverById };
