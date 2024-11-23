const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());



// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/WebApplications_A1');


mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully!');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
