'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.course = require('./course.js')(sequelize, Sequelize);
db.section = require('./section.js')(sequelize, Sequelize);
db.lesson = require('./lesson.js')(sequelize, Sequelize);
db.user = require('./user.js')(sequelize, Sequelize);


db.course.hasMany(db.section);
db.section.belongsTo(db.course);

db.section.hasMany(db.lesson);
db.lesson.belongsTo(db.section);

db.user.hasMany(db.course);
db.course.belongsTo(db.user);

db.user.belongsToMany(db.course, { through: 'userscourses' });
db.course.belongsToMany(db.user, { through: 'userscourses' });



//sequelize.sync({force:true})



module.exports = db;
