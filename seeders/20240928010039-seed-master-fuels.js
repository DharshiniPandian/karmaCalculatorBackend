'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_fuels', [
      {
        name: 'Petrol',
        path: '/images/petrol.png',  
        value: 85.50,  
      },
      {
        name: 'Diesel',
        path: '/images/diesel.png', 
        value: 75.30,  
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_fuels', null, {});
  }
};
