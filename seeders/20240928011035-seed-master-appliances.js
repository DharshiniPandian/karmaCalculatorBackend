'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_appliances', [
      {
        name: 'Fridge',
        value: 500.00,               
      },
      {
        name: 'AC',
        value: 1000.00,              
      },
      {
        name: 'Chimney',
        value: 300.00,                
      },
      {
        name: 'Washing Machine',
        value: 700.00,               
      },
      {
        name: 'Electric Vehicles',
        value: 1500.00,               
      },
      {
        name: 'Air Cooler',
        value: 250.00,               
      },
      {
        name: 'Mixer/Grinder',
        value: 100.00,                
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_appliances', null, {});
  }
};
