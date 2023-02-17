'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Walking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Walking.init({
    name: {
      type: DataTypes.ENUM('Morning', 'Afternoon', 'Evening'),
      defaultValue: 'Morning'
    },
    length: {
      type: DataTypes.ENUM('Short', 'Medium', 'Long'),
      defaultValue: 'Short'
    },
    dogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cats',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Walking',
  });
  return Walking;
};