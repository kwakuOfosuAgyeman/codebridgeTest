const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
require('dotenv').config();


const Dog = sequelize.define('dog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tail_length: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Dog;
