module.exports = (sequelize, DataTypes) => {
    const userscourses = sequelize.define('userscourses', {}, { timestamps: false });
    return userscourses;
  };