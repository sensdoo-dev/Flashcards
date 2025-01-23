'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question, User }) {
      this.hasMany(Question, { foreignKey: 'topic_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Topic.init(
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Topic',
    },
  );
  return Topic;
};
