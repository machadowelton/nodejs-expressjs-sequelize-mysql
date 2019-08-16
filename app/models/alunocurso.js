'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlunoCurso = sequelize.define('AlunoCurso', {
    alunoId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {});
  AlunoCurso.associate = function(models) {
    // associations can be defined here
  };
  return AlunoCurso;
};