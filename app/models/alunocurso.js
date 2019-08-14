'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlunoCurso = sequelize.define('AlunoCurso', {
    id_aluno: DataTypes.INTEGER,
    id_curso: DataTypes.INTEGER
  }, {});
  AlunoCurso.associate = function(models) {
    // associations can be defined here
  };
  return AlunoCurso;
};