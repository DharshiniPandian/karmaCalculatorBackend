'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Form.hasOne(models.Transaction, {
        foreignKey: 'transaction_id', 
        as: 'transaction',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Form.init({
    transaction_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transactions', 
        key: 'id'
      },
    },
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_trees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name_to_be_planted: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Form',
    tableName: 'form',
    underscored: true,
    timestamps: false
  });
  return Form;
};