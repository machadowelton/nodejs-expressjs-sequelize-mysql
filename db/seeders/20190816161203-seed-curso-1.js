'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cursos',[
      {
        nomeCurso: 'Java',
        apresentadorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeCurso: 'NODES',
        apresentadorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cursos', null, {});
  }
};
