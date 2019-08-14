'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalaAula = sequelize.define('SalaAula', {
    nome_sala: DataTypes.STRING
  }, {});
  SalaAula.associate = function(models) {
    SalaAula.hasMany(models.Aluno, {
      foreignKey: 'SalaAulaId',
      as: 'alunos'
    });
  };
  return SalaAula;
};