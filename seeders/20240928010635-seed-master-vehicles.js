'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_vehicles', [
      {
        name: 'Bicycle/Walk',
        path: '/images/bicycle.png', 
        value: 0.00,                
      },
      {
        name: 'Two Wheeler',
        path: '/images/two-wheeler.png',
        value: 0.10,                  
      },
      {
        name: 'Car',
        path: '/images/car.png',   
        value: 0.20,             
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_vehicles', null, {});
  }
};
