const { Driver, Teams, relations_table } = require('../db');

async function getAllDrivers(req, res) {
  try {
    const drivers = await Driver.findAll({
      attributes: [ 'id', 'name', 'last_name', 'description', 'image', 'birthdate', 'nationality'],
      include: [{
        model: Teams,
        through: {
          model: relations_table,
        },
        attributes: ['name'], // Solo selecciona el nombre del equipo
      }],
    });

    // Mapea los resultados para transformar la estructura de los equipos
    const formattedDrivers = drivers.map(driver => ({
      id: driver.id,
      name: driver.name,
      last_name: driver.last_name,
      description: driver.description,
      image: driver.image,
      birthdate: driver.birthdate,
      nationality: driver.nationality,
      teams: driver.Teams.map(team => team.name), // Mapea los equipos para obtener solo los nombres
    }));

    res.status(200).json(formattedDrivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ message: 'Error fetching drivers' });
  }
}

module.exports = { getAllDrivers };