const { sequelize, MasterFuel, MasterFood, MasterAppliance, MasterVehicle} = require('../../../models');

const get_master_foods = async (req, res) => {
    try {
        const masterfoods = await MasterFood.findAll();
        res.status(200).json(masterfoods);
    } catch (error) {
        console.error("Error fetching product masterfoods:", error);
        res.status(500).send("Internal Server Error");
    }
};

const get_master_fuels = async (req, res) => {
    try {
        const masterfuels = await MasterFuel.findAll();
        res.status(200).json(masterfuels);
    } catch (error) {
        console.error("Error fetching product masterfuels:", error);
        res.status(500).send("Internal Server Error");
    }
};

const get_master_appliances = async (req, res) => {
    try {
        const masterappliances = await MasterAppliance.findAll();
        res.status(200).json(masterappliances);
    } catch (error) {
        console.error("Error fetching product masterappliances:", error);
        res.status(500).send("Internal Server Error");
    }
};

const get_master_vehicles = async (req, res) => {
    try {
        const mastervehicles = await MasterVehicle.findAll();
        res.status(200).json(mastervehicles);
    } catch (error) {
        console.error("Error fetching product mastervehicles:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    get_master_foods,
    get_master_fuels,
    get_master_appliances,
    get_master_vehicles
};

// const get_master_foods = async (req, res) => {
//     const { id } = req.params;
//     try {
//       const masterfoods = await MasterFood.findAll({
//         where: {
//           category_id: id, // Corrected the where clause
//         },
//       });
//       res.status(200).json(masterfoods);
//     } catch (error) {
//       console.error('Error fetching masterfoods:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   };