'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    nomeAluno: DataTypes.STRING,
    salaAulaId: DataTypes.INTEGER
  }, {});
  Aluno.associate = function(models) {
    Aluno.belongsTo(models.SalaAula,{
      foreignKey: 'salaAulaId',
      as: 'salaAulas'
    });
    Aluno.belongsToMany(models.Curso, {
      through: 'AlunoCurso',
      as: 'cursos',
      foreignKey: 'alunoId'
    });
  };
  return Aluno;
};