const express = require('express');
const router = express.Router();
const transactioncontroller = require('../controllers/transaction_controller/index');

/**
 * @swagger
 *  components:
 *      schemas:
 *          VehiclePost:
 *              type: object
 *              properties:
 *                  vehicle_id:
 *                      type: integer
 *                      example: 1
 *                  vehicle_count:
 *                      type: integer
 *                      example: 2
 *                  fuel_type:
 *                      type: integer
 *                      example: 1
 *                  travel_distance:
 *                      type: number
 *                      format: float
 *                      example: 100.5
 * 
 *          FoodPost:
 *              type: object
 *              properties:
 *                  food_type:
 *                      type: integer
 *                      example: 1
 *                  
 *          AppliancePost:
 *              type: object
 *              properties:
 *                  appliances:
 *                      type: array
 *                      items:
 *                          type: integer
 *                      example: [1, 3]
 *                  electricity_consumption:
 *                      type: number
 *                      format: float
 *                      example: 150.25
 * 
 *          TotalEmission:
 *              type: object
 *              properties:
 *                  total_emission:
 *                      type: number
 *                      format: float
 *                      example: 250.75
 * 
 *          PlantTrees:
 *              type: object
 *              properties:
 *                  plant_trees:
 *                      type: integer
 *                      example: 1
 * 
 *          Form:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      example: "John Doe"
 *                  number_of_trees:
 *                      type: integer
 *                      example: 4
 *                  name_to_be_planted:
 *                      type: string
 *                      example: "Oak"
 *                  phone:
 *                      type: string
 *                      example: "1234567890"
 *                  email:
 *                      type: string
 *                      example: "john.doe@example.com"
 *                  location:
 *                      type: string
 *                      example: "New York"
 * 
 *          Transaction:
 *              type: object
 *              properties:
 *                  vehicle:
 *                      $ref: '#/components/schemas/VehiclePost'
 *                  food:
 *                      $ref: '#/components/schemas/FoodPost'
 *                  appliance:
 *                      $ref: '#/components/schemas/AppliancePost'
 *                  total_emission:
 *                      $ref: '#/components/schemas/TotalEmission'
 *                  plant_trees:
 *                      $ref: '#/components/schemas/PlantTrees'
 *                  form:
 *                      $ref: '#/components/schemas/Form'
 * 
 */

/**
 * @swagger
 * /transaction/data:
 *  post:
 *      summary: To store data in the corresponding table
 *      description: To store the data in the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Transaction'
 *      responses:
 *          200:
 *              description: Data stored successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Data stored successfully"
 *                              transaction:
 *                                  $ref: '#/components/schemas/Transaction'
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Error storing data"
 *                              error:
 *                                  type: object
 */

router.post('/data', transactioncontroller.store_data);

module.exports = router;
