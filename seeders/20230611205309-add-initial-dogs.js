'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dogs', [
      {
        name: 'Neo',
        color: 'red & amber',
        tail_length: 22,
        weight: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jessy',
        color: 'black & white',
        tail_length: 7,
        weight: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dogs', null, {});
  }
};
