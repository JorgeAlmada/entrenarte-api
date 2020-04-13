const course = require('../models').course;

module.exports = {
    async delete(req, res) {
        curso = req.body;
        return course
        .update({
            status: false
        },
        {
            where: {id : curso.id}
        })
        .then(course => {
            res.status(201).send(course)
        })
        .catch(error => res.status(400).send(error));
    },
};