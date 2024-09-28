const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./config/db')
const cors = require('cors')
const masterRoutes = require('./src/routes/masterRoutes')

dotenv.config();

const app = express()

const PORT = process.env.PORT || 8081

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    allowedHeaders: ['Content-Type'],
    methods: ["POST", "GET", "PUT", "OPTIONS"],
    credentials: true
}));

app.use('/master',masterRoutes)

app.get('/', (req,res) => {
    res.send('request received');
});

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




