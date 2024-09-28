'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('form', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'transactions', 
          key: 'id'
        },
      },
      name:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      number_of_trees: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name_to_be_planted: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('form');
  }
};