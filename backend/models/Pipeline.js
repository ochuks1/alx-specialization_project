const mongoose = require('mongoose');

const pipelineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    length: { type: Number, required: true },
    diameter: { type: Number, required: true },
    material: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model('Pipeline', pipelineSchema);
