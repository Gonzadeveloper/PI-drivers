const { Driver, Teams, relations_table } = require('../models/index');

async function createDriver(req, res) {
  const { name, last_name, description, image, birthdate, nationality, teams } = req.body;

  try {
    // Obtener todos los equipos
    let teamsDB = await Teams.findAll();

    // Convertir el listado de equipos recibido a un array (en caso de que sea string)
    let convertTeamsArray = teams;

    // Verificar que los equipos enviados existan en la base de datos
    const teamNames = teamsDB.map(team => team.name);
    const existingTeams = convertTeamsArray.filter(team => teamNames.includes(team));

    if (existingTeams.length === 0) {
      return res.status(404).json({ message: `The following teams do not exist: ${teams.join(', ')}` });
    }

    // Filtrar los equipos que existen en la DB y extraer sus ID y nombres
    const foundTeams = teamsDB.filter(team => convertTeamsArray.includes(team.name));

    // Crear el conductor
    const driver = await Driver.create({
      name,
      last_name,
      description,
      image,
      birthdate,
      nationality,
    });

    // Relacionar el conductor con los equipos encontrados
    await Promise.all(
      foundTeams.map(async (team) => {
        // Aquí nos aseguramos de que el id del driver y del team estén bien
        await relations_table.create({
          driverId: driver.id,  // Usar el ID del conductor creado
          teamId: team.id,      // Usar el ID del equipo encontrado en la base de datos
        });
      })
    );

    res.status(201).json({ message: 'Driver created successfully' });
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ message: 'Error creating driver' });
  }
}

module.exports = { createDriver };
