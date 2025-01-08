const express = require('express');
const Pipeline = require('../models/Pipeline');

const router = express.Router();

// To get all pipelines
router.get('/', async (req, res) => {
    try {
        const pipelines = await Pipeline.find();
        res.status(200).json(pipelines);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pipelines' });
    }
});

// To add a new pipeline
router.post('/', async (req, res) => {
    try {
        const pipeline = new Pipeline(req.body);
        await pipeline.save();
        res.status(201).json(pipeline);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add pipeline' });
    }
});

module.exports = router;
