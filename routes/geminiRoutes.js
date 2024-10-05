// routes/geminiRoutes.js

const express = require('express');
const router = express.Router();
const { chatWithGemini } = require('../controllers/geminiController');
const { solveWithGemini } = require('../controllers/geminiController');


router.post('/chat', async (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const response = await chatWithGemini(message);
        res.json({ data: response });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});
router.post('/solve', async (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const response = await solveWithGemini(message);
        res.json({ data: response });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
