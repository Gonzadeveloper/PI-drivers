const { Router } = require("express");

const router = Router();
const { getDrivers } = require('../controllers/getAllDrivers')
const { getDriverById } = require("../controllers/getDriversByID");
const { createDriver } = require('../controllers/PostDrivers');
const { getDriverByName } = require('../controllers/getDriverByName');
const { getAllTeamNames } = require('../controllers/getAllTeamsFromdb');
const { createTeam } = require('../controllers/PostTeams')


router.get('/drivers', getDrivers);
router.get('/drivers/:id', getDriverById);
router.post('/postDrivers', createDriver);
router.get('/drivers/name/:name', getDriverByName);
router.get('/teamNames', getAllTeamNames);
router.post('/postTeams', createTeam);

module.exports = router;
