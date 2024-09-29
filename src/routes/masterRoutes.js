const express = require('express');
const router = express.Router();
const mastercontroller = require('../controllers/master_controller/index');


/**
 * @swagger
 *  components:
 *      schemas:
 *          Food:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "Veg"
 *                  path:
 *                      type: string
 *                      example: "/images/veg.jpg"
 *                  value:
 *                      type: number
 *                      format: float
 *                      example: 12.34  
 *          Fuel:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "petrol/diesel"
 *                  path:
 *                      type: string
 *                      example: "/images/petrol.jpg"
 *                  value:
 *                      type: number
 *                      format: float
 *                      example: 12.34   
 *          Appliance:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "AC"
 *                  path:
 *                      type: string
 *                      example: "ac.jpg"
 *                  value:
 *                      type: number
 *                      format: float
 *                      example: 12.34   
 *          Vehicle:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      example: 1
 *                  name:
 *                      type: string
 *                      example: "Car"
 *                  path:
 *                      type: string
 *                      example: "car.jpg"
 *                  value:
 *                      type: number
 *                      format: float
 *                      example: 12.34   
 */

/**
 * @swagger
 * /master/foods:
 *  get:
 *      summary: To get all food items listed in the master table
 *      description:  To get all food items listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master food table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Food'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */


router.get('/foods', mastercontroller.get_master_foods);

/**
 * @swagger
 * /master/fuels:
 *  get:
 *      summary: To get all fuel items listed in the master table
 *      description:  To get all fuel items listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master fuel table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Fuel'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */


router.get('/fuels', mastercontroller.get_master_fuels);

/**
 * @swagger
 * /master/appliances:
 *  get:
 *      summary: To get all appliances listed in the master table
 *      description:  To get all appliances listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master appliance table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Appliance'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */


router.get('/appliances', mastercontroller.get_master_appliances);

/**
 * @swagger
 * /master/vehicles:
 *  get:
 *      summary: To get all vehicles listed in the master table
 *      description:  To get all vehicles listed in the master table
 *      responses:
 *          200:
 *              description: Successfully retrieved all items listed in the master vehicle table
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Vehicle'
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal Server Error"
 */

router.get('/vehicles', mastercontroller.get_master_vehicles);

module.exports = router;
