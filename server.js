const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./config/db')

dotenv.config();

const app = express()

const PORT = process.env.PORT || 8081

app.use(express.json());

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




