'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SalaAulas', [
      {
        nome_sala: 'brazil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_sala: 'argentina',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SalaAulas', null, {});
  }
};
