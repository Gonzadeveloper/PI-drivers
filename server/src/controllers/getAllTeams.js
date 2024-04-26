const axios = require('axios');
const { Teams } = require('../db');

async function loadTeamsFromAPI() {
    try {
      const response = await axios.get('http://localhost:5000/drivers');
      const teams = response.data;
  
      // Procesar los equipos y guardarlos en la base de datos si no existen
      for (const team of teams) {
        if (team.teams) { // Verificar si team.teams no es undefined
          const teamNames = team.teams.split(','); // Suponiendo que los equipos están separados por comas en un string
          for (const teamName of teamNames) {
            const existingTeam = await Teams.findOne({ where: { name: teamName.trim() } });
            if (!existingTeam) {
              await Teams.create({ name: teamName.trim() });
            }
          }
        }
      }
  
      console.log('Teams loaded successfully');
    } catch (error) {
      console.error('Error loading teams:', error);
    }
  }


module.exports = { loadTeamsFromAPI };