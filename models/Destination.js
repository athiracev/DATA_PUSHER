const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Account = require('./Account');

const Destination = sequelize.define('Destination', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  httpMethod: {
    type: DataTypes.STRING,
    allowNull: false
  },
  headers: {
    type: DataTypes.JSON, // Store headers as JSON
    allowNull: false
  }
}, {
  timestamps: true,
});

Account.hasMany(Destination, { onDelete: 'CASCADE' });
Destination.belongsTo(Account);

module.exports = Destination;
