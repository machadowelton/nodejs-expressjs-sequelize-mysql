'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    nome_aluno: DataTypes.STRING,
    SalaAulaId: DataTypes.INTEGER
  }, {});
  Aluno.associate = function(models) {
    Aluno.belongsTo(models.SalaAula);
    Aluno.belongsToMany(models.Curso, {
      through: 'AlunoCurso',
      as: 'cursos',
      foreignKey: 'id_aluno'
    });
  };
  return Aluno;
};