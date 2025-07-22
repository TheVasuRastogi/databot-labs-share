const TeamMember = require('../models/TeamMember');

// Get all team members
exports.getTeamMembers = async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.status(200).json({ success: true, members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a new team member
exports.addTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.create(req.body);
    res.status(201).json({ success: true, member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}; 