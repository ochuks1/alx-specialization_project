const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pipelineRoutes = require('./routes/pipelineRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/subsea', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('Database connection error:', error));

// Routes
app.use('/api/pipelines', pipelineRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
