'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas)
    Turmas.belongsTo(models.Pessoas, { foreignKey: 'docente_id'})
    Turmas.belongsTo(models.Niveis, { foreignKey: 'nivel_id' })
  };
  return Turmas;
};

// cria tabela turmas 
// npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly