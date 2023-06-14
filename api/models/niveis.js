'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Niveis.associate = function(models) {
    // associations can be defined here
  };
  return Niveis;
};

// criar tabela niveis
// npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string