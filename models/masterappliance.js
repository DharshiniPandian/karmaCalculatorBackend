'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterAppliance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterAppliance.hasMany(models.Transaction, {
        foreignKey: 'food_type',
        as: 'selectedfood',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
    }
  }
  MasterAppliance.init({
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
    value:  {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'MasterAppliance',
    tableName: 'master_appliances',
    underscored: true, 
    timestamps: false,
  });
  return MasterAppliance;
};