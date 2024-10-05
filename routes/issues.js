// issueRoutes.js

const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue'); // Adjust the path according to your structure

// Create an issue
router.post('/', async (req, res) => {
  try {
    const { issueType, title, description } = req.body;

    const newIssue = new Issue({
      issueType,
      title,
      description,
    });

    await newIssue.save();
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create issue', error });
  }
});

// Get all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch issues', error });
  }
});

module.exports = router;
