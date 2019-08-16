'use strict';
module.exports = (sequelize, DataTypes) => {
  const Apresentador = sequelize.define('Apresentador', {
    nomeApresentador: DataTypes.STRING
  }, {});
  Apresentador.associate = function(models) {
    Apresentador.hasOne(models.Curso, {
      foreignKey: 'ApresentadorId',
      as: 'apresentador',
    });
  };
  return Apresentador;
};