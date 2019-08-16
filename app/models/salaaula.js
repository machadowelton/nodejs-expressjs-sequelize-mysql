'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalaAula = sequelize.define('SalaAula', {
    nomeSala: DataTypes.STRING
  }, {});
  SalaAula.associate = function(models) {
    SalaAula.hasMany(models.Aluno, {
      foreignKey: 'salaAulaId',
      as: 'alunos'
    });
  };
  return SalaAula;
};