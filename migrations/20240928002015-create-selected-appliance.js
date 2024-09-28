'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('selected_appliances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'transactions', 
          key: 'id'
        },
      },
      appliance_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'master_appliances', 
          key: 'id'
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('selected_appliances');
  }
};