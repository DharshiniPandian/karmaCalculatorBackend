const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const cors = require('cors');
const masterRoutes = require('./src/routes/masterRoutes');
const transaction = require('./src/routes/transactionRoutes')
// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Set the port to listen on, defaulting to 8081 if not specified in environment variables
const PORT = process.env.PORT || 8081;

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: ["http://localhost:5173"],
    allowedHeaders: ['Content-Type'],
    methods: ["POST", "GET", "PUT", "OPTIONS"],
    credentials: true
}));

// Define routes
app.use('/master', masterRoutes);


app.use('/transaction', transaction)
// Basic health check route
app.get('/', (req, res) => {
    res.send('Request received');
});

// Synchronize the database and start the server
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });