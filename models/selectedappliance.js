'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SelectedAppliance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SelectedAppliance.belongsTo(models.Transaction, {
        foreignKey: 'transaction_id', 
        as: 'transaction',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      SelectedAppliance.belongsTo(models.MasterAppliance, {
        foreignKey: 'appliance_id', 
        as: 'appliance',            
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  SelectedAppliance.init({
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transactions', 
        key: 'id'
      },
    },
    appliance_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_appliances', 
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'SelectedAppliance',
    tableName: 'selected_appliances',
    underscored: true, 
    timestamps: false,
  });
  return SelectedAppliance;
};