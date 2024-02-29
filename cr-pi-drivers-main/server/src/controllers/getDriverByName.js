// const axios = require('axios');
// const { Driver } = require('../db');

// async function getDriverByName(req, res) {
//   const { name } = req.params;
//   const apiUrl = `http://localhost:5000/drivers?name.forename=${name}`;

//   try {
//     // Consultar API externa
//     const response = await axios.get(apiUrl);
//     const driver = response.data;

//     const driverApi = {
//       id: driver.id,
//       last_name: driver.name.forename,
//       name: driver.name.surname,
//       description: driver.description,
//       image: driver.image.url || 'default-url',
//       birthdate: driver.dob,
//       nationality: driver.nationality,
//       team: { name: driver.teams }, // Equipos predefinidos de la API
//   }
    
//     // Consultar base de datos local si no se encuentra en la API
//     if (driver.length === 0) {
//       const driverFromDB = await Driver.findOne({ where: { name: name } });
//       if (driverFromDB) {
//         return res.status(200).json(driverFromDB);
//       }
//       return res.status(404).json({ message: 'Driver not found' });
//     }

//     return res.status(200).json(driverApi);
//   } catch (error) {
//     console.error('Error getting driver:', error);
//     return res.status(500).json({ message: 'Error getting driver' });
//   }
// }

// module.exports = { getDriverByName };

const axios = require('axios');
const { Driver } = require('../db');

async function getDriverByName(req, res) {
  const { name } = req.params;
  const apiUrl = `http://localhost:5000/drivers?name.forename=${name}`;

  try {
    // Consultar API externa
    const response = await axios.get(apiUrl);
    const driverData = response.data;

    // Formatear los datos del conductor
    if( driverData.length === 1){
      let driverApi = {
      id: driverData[0].id,
      last_name: driverData[0].name.forename,
      name: driverData[0].name.surname,
      description: driverData[0].description,
      image: driverData[0].image.url || 'default-url',
      birthdate: driverData[0].dob,
      nationality: driverData[0].nationality,
      team: { name: driverData[0].teams }, // Equipos predefinidos de la API
    };
    return res.status(200).json(driverApi)
  }
    

    // Consultar base de datos local si no se encuentra en la API
    if (driverData.length === 0) {
      const driverFromDB = await Driver.findOne({ where: { name: name } });
      if (driverFromDB) {
        return res.status(200).json(driverFromDB);
      }
      return res.status(404).json({ message: 'Driver not found' });
    }

  } catch (error) {
    console.error('Error getting driver:', error);
    return res.status(500).json({ message: 'Error getting driver' });
  }
}

module.exports = { getDriverByName };

