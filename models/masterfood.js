'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterFood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterFood.hasMany(models.Transaction, {
        foreignKey: 'food_type',
        as: 'selectedfood',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });  
    }
  }
  MasterFood.init({
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
    modelName: 'MasterFood',
    tableName: 'master_foods',
    underscored: true, 
    timestamps: false,
  });
  return MasterFood;
};