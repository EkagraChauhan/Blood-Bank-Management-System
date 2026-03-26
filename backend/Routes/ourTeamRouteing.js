const express = require('express');
const router = express.Router();
const OurTeamsController = require('../Controllers/OurTeamsController');

const ourTeamController = new OurTeamsController();
router.get('/get-team', ourTeamController.getTeam);

module.exports = router;
