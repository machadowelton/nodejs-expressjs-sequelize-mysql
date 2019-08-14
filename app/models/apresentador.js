'use strict';
module.exports = (sequelize, DataTypes) => {
  const Apresentador = sequelize.define('Apresentador', {
    nome_apresentador: DataTypes.STRING
  }, {});
  Apresentador.associate = function(models) {
    Apresentador.hasOne(models.Curso, {
      foreignKey: 'id_apresentador',
      as: 'apresentador',
    });
  };
  return Apresentador;
};