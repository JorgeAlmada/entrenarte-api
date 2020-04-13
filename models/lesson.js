'use strict';
module.exports = (sequelize, DataTypes) => {
  const lesson = sequelize.define('lesson', {
    name: DataTypes.STRING,
    video: DataTypes.STRING,
    file: DataTypes.STRING,
    order: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN

  }, {});
  lesson.associate = function(models) {
    // associations can be defined here
  };
  return lesson;
};