const axios = require('axios');
const { Driver, Teams } = require('../db');

async function getDriverById(req, res) {
  const { id } = req.params;
  try {
    const driver = await Driver.findByPk(id, {
      include: [{ model: Teams, attributes: ['name'] }],
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

    if (driver) {
      const formattedDriver = {
        id: driver.id,
        name: driver.name,
        last_name: driver.last_name,
        description: driver.description,
        image: driver.image,
        birthdate: driver.birthdate,
        nationality: driver.nationality,
        team: {
          name: driver.Teams.map(team => team.name).join(', ')
        }
      };

      return res.status(200).json(formattedDriver);
    } else {
      throw new Error('Driver not found in database');
    }
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError' && error.parent && error.parent.code === '22P02') {
      // If the error is due to invalid UUID format, proceed to search in the API
      try {
        const response = await axios.get(`http://localhost:5000/drivers/${id}`);
        const apiDriver = response.data;

        const driver = {
          id: apiDriver.id,
          last_name: apiDriver.name.forename,
          name: apiDriver.name.surname,
          description: apiDriver.description,
          image: apiDriver.image.url || 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png',
          birthdate: apiDriver.dob,
          nationality: apiDriver.nationality,
          team: { name: apiDriver.teams }, // Equipos predefinidos de la API
        };

        return res.status(200).json(driver);
      } catch (apiError) {
        return res.status(500).json({ message: 'No driver with that id' });
      }
    } else {
      console.error('No driver with that id was found in the DB:', error);
      return res.status(500).json({ message: 'No driver with that id' });
    }
  }
}

module.exports = { getDriverById };