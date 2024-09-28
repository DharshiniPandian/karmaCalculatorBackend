'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterFuel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterFuel.hasMany(models.Transaction, {
        foreignKey: 'fuel_type',
        as: 'selectedVehiclefueltype',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
    }
  }
  MasterFuel.init({
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    path:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    value:  {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'MasterFuel',
    tableName: 'master_fuels',
    underscored: true, 
    timestamps: false,
  });
  return MasterFuel;
};