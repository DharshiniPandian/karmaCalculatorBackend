'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        foreignKey: 'user_id', 
        as: 'user',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Transaction.belongsTo(models.MasterVehicle, {
        foreignKey: 'vehicle_id', 
        as: 'mastervehicle',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Transaction.belongsTo(models.MasterFuel, {
        foreignKey: 'fuel_type', 
        as: 'masterfuel',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Transaction.belongsTo(models.MasterFood, {
        foreignKey: 'food_type', 
        as: 'masterfood',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Transaction.hasMany(models.SelectedAppliance, {
        foreignKey: 'transaction_id',
        as: 'selectedappliances',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }); 

      Transaction.hasOne(models.Form, {
        foreignKey: 'transaction_id', 
        as: 'form',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Transaction.init({
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', 
        key: 'id'
      },
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_vehicles', 
        key: 'id'
      },
    },
    vehicle_count:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuel_type:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_fuels', 
        key: 'id'
      },
    },
    travel_distance:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food_type:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_foods', 
        key: 'id'
      },
    },
    electricity_consumption: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_emission:  {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions',
    underscored: true,
    timestamps: false
  });
  return Transaction;
};