'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    about: DataTypes.STRING,
    img: DataTypes.STRING,
    video: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER,
    timesrated: DataTypes.INTEGER,
    students: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    level: DataTypes.INTEGER,
    order: DataTypes.INTEGER

  }, {});
  course.associate = function(models) {
    // associations can be defined here
  };
  return course;
};