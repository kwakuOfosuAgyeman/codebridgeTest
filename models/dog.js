const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
require('dotenv').config();


module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('dogs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true // Add unique constraint
        },
        color: {
          type: Sequelize.STRING,
          allowNull: false
        },
        tail_length: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        weight: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('dogs');
    }
  };
  
