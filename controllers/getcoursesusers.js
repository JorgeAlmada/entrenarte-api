const userscourses = require('../models').userscourses;
const user = require('../models').user;
const course = require('../models').course;

module.exports = {
    async getcoursesusers(req, res) {
        curso = req.body;
        console.log(curso.id);

        return course
        .findAll({
            where:{
                id : curso.id
            },
            include: [{
                model: user,
                as: 'users'
            }]
        }
        )
        .then(userscourses => {
            res.status(201).send(userscourses)
        })
        .catch(error => {res.status(400).send(error); console.log(error);});
    }
};