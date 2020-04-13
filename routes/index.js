const userController = require('../controllers').user;
const loggerController = require('../controllers').logger;
const passwordController = require('../controllers').pswchanger;
const profileController = require('../controllers').profilechanger;
const courseController = require('../controllers').coursegetter;
const sectionController = require('../controllers').sectiongetter;
const courseCreateController = require('../controllers').coursecreate;
const sectionCreateController = require('../controllers').sectioncreate;
const lessonCreateController = require('../controllers').lessoncreate;
const courseUpdateController = require('../controllers').courseupdate;
const sectionUpdateController = require('../controllers').sectionupdate;
const lessonUpdateController = require('../controllers').lessonupdate;
const courseDeleteController = require('../controllers').coursedelete;
const sectionDeleteController = require('../controllers').sectiondelete;
const lessonDeleteController = require('../controllers').lessondelete;
const getallcoursesController = require('../controllers').getallcourses;
const usersCoursesController = require('../controllers').getuserscourses;
const coursesUsersController = require('../controllers').getcoursesusers;
const getUsersController = require('../controllers').getusers;
const newUserCourseController = require('../controllers').newusercourse;
const deleteUserCourseController = require('../controllers').deleteusercourse;
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: "./public/images",
    filename: function(req, file, cb){
        cb(null, "IMAGE-"+ Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage : storage,
    limits: {fileSize: 1000000}
}).single('myFile');

const pdfstorage = multer.diskStorage({
    destination: "./public/lessonfiles",
    filename: function(req, file, cb){
        cb(null, "FILE-"+ Date.now() + path.extname(file.originalname));
    }
});
const pdfupload = multer({
    storage : pdfstorage,
    limits: {fileSize: 3 * 1024 * 1024}
}).single('myFile');

module.exports = (app) => {
    app.post('/user/login', loggerController.login);

    app.post('/user/register', userController.create);

    app.post('/user/changepassword', passwordController.changepassword);

    app.post('/user/changeprofile', upload, profileController.changeprofile);

    app.post('/courses/createcourse', upload, courseCreateController.create);

    app.post('/courses/createsection' , sectionCreateController.create);

    app.post('/courses/createlesson' , pdfupload ,lessonCreateController.create);
    
    app.post('/courses/updatecourse', upload, courseUpdateController.update);

    app.post('/courses/updatesection' , sectionUpdateController.update);

    app.post('/courses/updatelesson' , pdfupload ,lessonUpdateController.update);

    app.post('/courses/deletecourse' , courseDeleteController.delete);

    app.post('/courses/deletesection' , sectionDeleteController.delete);

    app.post('/courses/deletelesson' , lessonDeleteController.delete);

    app.post('/courses/getcourses', courseController.getcourses);

    app.post('/courses/getuserscourses', usersCoursesController.getuserscourses);

    app.post('/courses/getcoursesusers', coursesUsersController.getcoursesusers);

    app.post('/courses/newusercourse', newUserCourseController.create);

    app.post('/courses/deleteusercourse', deleteUserCourseController.delete);

    app.get('/courses/getsection', sectionController.getsection);

    app.get('/courses/getallcourses', getallcoursesController.getcourses);

    app.get('/user/getusers', getUsersController.getusers);

}