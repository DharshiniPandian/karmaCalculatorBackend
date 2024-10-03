'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_fuels', [
      {
        name: 'Petrol/ Diesel',
        path: '/images/petrolDiesel.png',  
        value: 0.50,  
      },
      {
        name: 'Electric Vehicle',
        path: '/images/electric.svg',
        value: 0.30,  
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_fuels', null, {});
  }
};
