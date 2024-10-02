'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_foods', [
      {
        name: 'Veg',
        path: '/images/veg.png',
        value: 1.5,           
      },
      {
        name: 'Non-Veg',
        path: '/images/non-veg.png',
        value: 3.3,              
      },
      {
        name: 'Both',
        path: '/images/both.png',  
        value: 2.3,            
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_foods', null, {});
  }
};
