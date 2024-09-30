const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./config/db')
const cors = require('cors')
const masterRoutes = require('./src/routes/masterRoutes')
const transactionRoutes = require('./src/routes/transactionRoutes')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

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

const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title: 'Karma Calculator',
            version: '1.0.0',
            description: 'API documentation using Swagger'
        },
        servers:[
            {
               url : 'http://localhost:8081/'
            }
        ] 
    },
    // apis: ['./src/routes/masterRoutes']
    apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/master',masterRoutes)

app.use('/transaction', transactionRoutes)

/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: to test get method
 */

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




