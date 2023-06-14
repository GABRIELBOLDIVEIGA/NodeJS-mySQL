'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function(models) {
    // associations can be defined here
  };
  return Matriculas;
};

//cria tabela matriculas
// npx sequelize-cli model:create --name Matriculas --attributes status:string