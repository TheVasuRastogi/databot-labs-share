const express = require('express');
const router = express.Router();
const { getTeamMembers, addTeamMember } = require('../controllers/teamController');

router.route('/')
  .get(getTeamMembers)
  .post(addTeamMember);

module.exports = router; 