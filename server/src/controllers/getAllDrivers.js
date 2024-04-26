const axios = require('axios');
const { Driver, Teams, relations_table } = require('../db');

async function getDrivers(req, res) {
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
      team: {
        name: driver.Teams.map(team => team.name).join(', ') // Une los nombres de los equipos con una coma y un espacio
      }
    }));

    const driversFromExternalAPI = await axios.get('http://localhost:5000/drivers');
    const externalDrivers = driversFromExternalAPI.data.map((driver) => ({
      id: driver.id,
      last_name: driver.name.forename,
      name: driver.name.surname,
      description: driver.description,
      image: driver.image.url || 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png',
      birthdate: driver.dob,
      nationality: driver.nationality,
      team: { name: driver.teams }, // Equipos predefinidos de la API
    }));

    const allDrivers = [...formattedDrivers, ...externalDrivers];

    res.json(allDrivers);
  } catch (error) {
    console.error('Error al obtener los drivers:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { getDrivers };