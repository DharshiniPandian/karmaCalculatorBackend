'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',  
          key: 'id',     
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_vehicles',  
          key: 'id',     
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vehicle_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fuel_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_fuels',  
          key: 'id',     
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      travel_distance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      food_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_foods',  
          key: 'id',     
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      electricity_consumption: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_emission:  {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};