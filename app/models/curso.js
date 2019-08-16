'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    apresentadorId: DataTypes.INTEGER,
    nomeCurso: DataTypes.STRING
  }, {});
  Curso.associate = function(models) {
    Curso.belongsToMany(models.Aluno, {
      through: 'AlunoCurso',
      as: 'alunos',
      foreignKey: 'cursoId'
    });
    Curso.belongsTo(models.Apresentador);
  };
  return Curso;
};