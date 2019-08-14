'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alunos',[
      {
        nome_aluno: 'Joyvis Santana',
        createdAt: new Date(),
        updatedAt: new Date(),
        SalaAulaId: 1
      },
      {
        nome_aluno: 'Richard William',
        createdAt: new Date(),
        updatedAt: new Date(),
        SalaAulaId: 2
      },
      {
        nome_aluno: 'Welton Machado',
        createdAt: new Date(),
        updatedAt: new Date(),
        SalaAulaId: 2
      }
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alunos', null, {});
  }
};
