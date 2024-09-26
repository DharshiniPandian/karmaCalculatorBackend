'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.belongsTo(models.User, {
        foreignKey: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Vehicle.init({
    user_id:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuel_type:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    kilometres:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicles',
    underscored: true,
    timestamps: false
  });
  return Vehicle;
};