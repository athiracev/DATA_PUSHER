const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Account = sequelize.define('Account', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  accountName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appSecretToken: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
});

module.exports = Account;
