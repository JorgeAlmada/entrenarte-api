'use strict';
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define('section', {
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    has_quiz: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN

  }, {});
  section.associate = function(models) {
    // associations can be defined here
  };
  return section;
};