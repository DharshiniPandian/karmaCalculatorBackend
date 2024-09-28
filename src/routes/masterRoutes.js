const express = require('express');
const router = express.Router();
const mastercontroller = require('../controllers/master_controller/index');

router.get('/foods', mastercontroller.get_master_foods);
router.get('/fuels', mastercontroller.get_master_fuels);
router.get('/appliances', mastercontroller.get_master_appliances);
router.get('/vehicles', mastercontroller.get_master_vehicles);

module.exports = router;
