const user = require('./user');
const logger = require('./login');
const pswchanger = require('./changepassword');
const profilechanger = require('./changeprofile');
const coursegetter = require('./getcourse');
const sectiongetter = require('./getsection');
const coursecreate = require('./newcourse');
const sectioncreate = require('./newsection');
const lessoncreate = require('./newlesson');
const courseupdate = require('./updatecourse');
const sectionupdate = require('./updatesection');
const lessonupdate = require('./updatelesson');
const coursedelete = require('./deletecourse');
const sectiondelete = require('./deletesection');
const lessondelete = require('./deletelesson');
const getallcourses = require('./getallcourses');
const getuserscourses = require('./getuserscourses');
const getcoursesusers = require('./getcoursesusers');
const getusers = require('./getusers');
const newusercourse = require('./newusercourse');
const deleteusercourse = require('./deleteusercourse');
module.exports = {
    user,
    logger,
    pswchanger,
    profilechanger,
    coursegetter,
    sectiongetter,
    coursecreate,
    sectioncreate,
    lessoncreate,
    courseupdate,
    sectionupdate,
    lessonupdate,
    coursedelete,
    sectiondelete,
    lessondelete,
    getallcourses,
    getuserscourses,
    getusers,
    newusercourse,
    getcoursesusers,
    deleteusercourse
};