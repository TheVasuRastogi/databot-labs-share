const express = require('express');
const router = express.Router();
const { getMilestones, addMilestone } = require('../controllers/milestoneController');

router.route('/')
  .get(getMilestones)
  .post(addMilestone);

module.exports = router; 