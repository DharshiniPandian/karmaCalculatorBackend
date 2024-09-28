'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('master_vehicles', [
      {
        name: 'Bicycle/Walk',
        path: '/images/bicycle.png', 
        value: 50.00,                
      },
      {
        name: 'Two Wheeler',
        path: '/images/two-wheeler.png',
        value: 100.00,                  
      },
      {
        name: 'Car',
        path: '/images/car.png',   
        value: 200.00,             
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('master_vehicles', null, {});
  }
};
