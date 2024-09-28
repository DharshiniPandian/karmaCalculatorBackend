'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_foods', [
      {
        name: 'Veg',
        path: '/images/veg.png',
        value: 100.00,           
      },
      {
        name: 'Non-Veg',
        path: '/images/non-veg.png',
        value: 150.00,              
      },
      {
        name: 'Both',
        path: '/images/both.png',  
        value: 200.00,            
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_foods', null, {});
  }
};
