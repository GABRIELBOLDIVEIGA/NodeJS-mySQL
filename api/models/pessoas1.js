'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, { foreignKey: 'docente_id'})
    Pessoas.hasMany(models.Matriculas, { foreignKey: 'estudante_id'})
  };
  return Pessoas;
};

// cria tabela Pessoas
// npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string