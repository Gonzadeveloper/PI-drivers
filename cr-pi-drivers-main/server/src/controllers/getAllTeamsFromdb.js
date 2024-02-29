const { Teams } = require('../db'); 
async function getAllTeamNames(req, res) {
  try {
    const teams = await Teams.findAll({
      attributes: ['name']
    });

    const teamNames = teams.map(team => team.name);
    
    return res.status(200).json(teamNames);
  } catch (error) {
    console.error('Error getting team names:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getAllTeamNames };