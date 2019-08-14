'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    id_apresentador: DataTypes.INTEGER,
    nome_curso: DataTypes.STRING
  }, {});
  Curso.associate = function(models) {
    Curso.belongsToMany(models.Aluno, {
      through: 'AlunoCurso',
      as: 'alunos',
      foreignKey: 'id_curso'
    });
    Curso.belongsTo(models.Apresentador);
  };
  return Curso;
};