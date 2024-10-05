// issueModel.js

const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  issueType: {
    type: String,
    required: true,
    enum: ['improvement', 'Report a problem', ], // Possible issue types
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
