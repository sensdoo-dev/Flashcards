'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Topic }) {
      this.hasMany(Topic, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
