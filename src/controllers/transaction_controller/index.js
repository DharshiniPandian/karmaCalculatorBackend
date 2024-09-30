const {User, Transaction, SelectedAppliance, Form, sequelize} = require('../../../models');

const store_data = async (req,res) => {
    const t = await sequelize.transaction();
    try{
        const { vehicle, food, appliance, total_emission, plant_trees, form } = req.body;

        const newUser = await User.create({}, { transaction: t });

        const newTransaction = await Transaction.create({
            user_id: newUser.id,
            vehicle_id: vehicle.vehicle_id,
            vehicle_count: vehicle.vehicle_count,
            fuel_type: vehicle.fuel_type,
            travel_distance: vehicle.travel_distance,
            food_type: food.food_type,
            electricity_consumption: appliance.electricity_consumption,
            total_emission: total_emission.total_emission,
            plant_trees: plant_trees.plant_trees
        }, { transaction: t });

        if (appliance.appliances && appliance.appliances.length > 0) {
            const selectedAppliances = appliance.appliances.map((app) => ({
                transaction_id: newTransaction.id,
                appliance_id: app,
            }));
            await SelectedAppliance.bulkCreate(selectedAppliances, { transaction: t });
        }

        if (plant_trees.plant_trees === 1) {
            await Form.create({
                transaction_id: newTransaction.id,
                name: form.name,
                number_of_trees: form.number_of_trees,
                name_to_be_planted: form.name_to_be_planted,
                phone: form.phone,
                email: form.email,
                location: form.location
            }, { transaction: t });
        }

        await t.commit();

        res.status(200).json({
            message: 'Data stored successfully',
            transaction: newTransaction
        });

    } catch (error) {
        await t.rollback();
        console.error(error);
        res.status(500).json({ message: 'Error storing data', error });
    }
};

module.exports = {
    store_data
};