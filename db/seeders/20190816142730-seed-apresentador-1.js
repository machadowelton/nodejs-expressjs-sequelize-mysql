'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Apresentadors',[
      {
        nomeApresentador: 'Adriana Bruna da Conceição',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeApresentador: 'Clara Rosa Martins',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Apresentadors', null, {});
  }
};
