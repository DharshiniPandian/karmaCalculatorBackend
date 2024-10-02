'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_appliances', [
      {
        name: 'Fridge',
        value: 0.55,               
      },
      {
        name: 'AC',
        value: 0.50,              
      },
      {
        name: 'Chimney',
        value: 0.05,                
      },
      {
        name: 'Washing Machine',
        value: 0.07,               
      },
      {
        name: 'Electric Vehicles',
        value: 0.12,               
      },
      {
        name: 'Air Cooler',
        value: 0.02,               
      },
      {
        name: 'Mixer/ Grinder',
        value: 0.01,                
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_appliances', null, {});
  }
};
