const { Router } = require("express");

const router = Router();
const { getDrivers } = require('../controllers/getAllDrivers')
const { loadTeamsFromAPI } = require('../controllers/getAllTeams');
const { getDriverById } = require("../controllers/getDriversByID");
const { createDriver } = require('../controllers/PostDrivers');
const { getDriverByName } = require('../controllers/getDriverByName');
const { getAllDrivers } = require('../controllers/getAllDriversFromDb');
const { getAllTeamNames } = require('../controllers/getAllTeamsFromdb');

router.get('/teamNames', getAllTeamNames);

router.get('/drivers/:id', getDriverById);

router.get('/drivers', getDrivers);

router.post('/postDrivers', createDriver);

router.get('/drivers/name/:name', getDriverByName);

router.get('/driverFromApi', getAllDrivers);
router.get('/load-teams', async (req, res) => {
    try {
      await loadTeamsFromAPI();
      res.status(200).json({ message: 'Teams loaded successfully' });
    } catch (error) {
      console.error('Error loading teams:', error);
      res.status(500).json({ message: 'Error loading teams' });
    }
  });


module.exports = router;
