'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.User, {
        foreignKey: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Food.init({
    user_id:  {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users', 
        key: 'id'
      },
    },
    food_type:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Food',
    tableName: 'foods',
    underscored: true,
    timestamps: false
  });
  return Food;
};