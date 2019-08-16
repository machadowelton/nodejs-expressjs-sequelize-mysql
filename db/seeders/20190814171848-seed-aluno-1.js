'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alunos',[
      {
        nomeAluno: 'Joyvis Santana',
        createdAt: new Date(),
        updatedAt: new Date(),
        salaAulaId: 1
      },
      {
        nomeAluno: 'Richard William',
        createdAt: new Date(),
        updatedAt: new Date(),
        salaAulaId: 2
      },
      {
        nomeAluno: 'Welton Machado',
        createdAt: new Date(),
        updatedAt: new Date(),
        salaAulaId: 2
      }
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alunos', null, {});
  }
};
