'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Vehicle, {
        foreignKey: 'user_id',
        as: 'vehicle', //alias for association
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasOne(models.Food, {
        foreignKey: 'user_id',
        as: 'food',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
  },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    timestamps: false
  });
  return User;
};