const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  linkedin: {
    type: String
  },
  github: {
    type: String
  }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema); 