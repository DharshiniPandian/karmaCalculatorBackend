'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterVehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterVehicle.hasMany(models.Transaction, {
        foreignKey: 'vehicle_id',
        as: 'selectedVehicle',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
    }
  }
  MasterVehicle.init({
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
    modelName: 'MasterVehicle',
    tableName: 'master_vehicles',
    underscored: true, 
    timestamps: false,
  });
  return MasterVehicle;
};