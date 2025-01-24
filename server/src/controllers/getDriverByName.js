const { Driver } = require('../models/index');

async function getDriverByName(req, res) {
  const { name } = req.params;

  try {
    // Consultar base de datos local para obtener al conductor por el nombre
    const driverFromDB = await Driver.findOne({ where: { name: name } });

    // Si el conductor es encontrado en la base de datos, devolverlo
    if (driverFromDB) {
      return res.status(200).json(driverFromDB);
    }

    // Si no se encuentra al conductor en la base de datos
    return res.status(404).json({ message: 'Driver not found' });

  } catch (error) {
    console.error('Error getting driver:', error);
    return res.status(500).json({ message: 'Error getting driver' });
  }
}

module.exports = { getDriverByName };


