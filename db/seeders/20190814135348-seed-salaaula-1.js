'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SalaAulas', [
      {
        nomeSala: 'brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeSala: 'argentina',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SalaAulas', null, {});
  }
};
