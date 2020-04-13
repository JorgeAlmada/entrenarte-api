const course = require('../models').course;
const section = require('../models').section;
const lesson = require('../models').lesson;

module.exports = {
    async getcourses(req, res) {
        usuario = req.body;
        return course
        .findAll({
            where:{
                private : false,
                status : true
            },
            include: [{
                all: true, nested: true
            }]
        }
        )
        .then(course => {
            res.status(201).send(course)
        })
        .catch(error => {res.status(400).send(error); console.log(error);});
    }
};