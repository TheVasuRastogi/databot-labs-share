const Milestone = require('../models/Milestone');

// Get all milestones
exports.getMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find();
    res.status(200).json({ success: true, milestones });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a new milestone
exports.addMilestone = async (req, res) => {
  try {
    const milestone = await Milestone.create(req.body);
    res.status(201).json({ success: true, milestone });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}; 