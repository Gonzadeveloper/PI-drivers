const { Driver, Teams, relations_table } = require('../db');

async function createDriver(req, res) {
  const { name, last_name, description, image, birthdate, nationality, teams } = req.body;

  try {

    let teamsDB = await Teams.findAll();

    // como teams  lo recibo en string lo vou a convertir en array 

    let convertTeamsArray = teams.split(' ')
    
    // Verificar si todos los equipos existen
    const teamNames = teamsDB.map(team => team.name);

    const existingTeams = convertTeamsArray.filter(team => teamNames.includes(team));
    
    if (existingTeams.length === 0) {
    return res.status(404).json({ message: `The following teams do not exist: ${teams.join(', ')}` });
    }
    
    // Esta parte crea un array de objetos con los ID y nombres de equipos encontrados 
    
    const foundTeams = teamsDB.reduce((acc, team) => {
        if (convertTeamsArray.includes(team.name)) {
          acc.push({ id: team.id, name: team.name });
        }
        return acc;
      }, []);     

    // Crear el conductor
    const driver = await Driver.create({
      name,
      last_name,
      description,
      image,
      birthdate,
      nationality,
    });
    
    // Relacionar el conductor con los equipos
    await Promise.all(
        foundTeams.map(async (team) => {
          await relations_table.create({
            DriverId: driver.id,
            TeamId: team.id,
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

