const axios = require('axios');
const { Driver, Teams, relations_table } = require('../db');

async function saveDriversFromApi(req, res) {
  try {
    // 1. Obtener los datos de la API externa
    const { data: apiDrivers } = await axios.get('http://localhost:5000/drivers');

    // 2. Procesar solo los primeros 50 conductores
    const driversToProcess = apiDrivers.slice(0, 50);

    // 3. Procesar y guardar los datos en la base de datos
    for (const driver of driversToProcess) {
      for (const teamName of driver.teams) {
        const [team, teamCreated] = await Teams.findOrCreate({
          where: { name: teamName }
        });

        const truncatedDescription = driver.description
          ? driver.description.substring(0, 255)
          : '';

        const [createdDriver, driverCreated] = await Driver.findOrCreate({
          where: { 
            name: driver.name.forename, 
            last_name: driver.name.surname 
          },
          defaults: {
            description: truncatedDescription,
            image: driver.image.url || 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png',
            birthdate: driver.dob,
            nationality: driver.nationality,
          }
        });

        await relations_table.findOrCreate({
          where: {
            DriverId: createdDriver.id,
            TeamId: team.id,
          }
        });
      }
    }

    res.status(201).json({ message: 'Drivers successfully saved to the database' });
  } catch (error) {
    console.error('Error saving drivers to the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { saveDriversFromApi };