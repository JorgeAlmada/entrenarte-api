const section = require('../models').section;

module.exports = {
    async create(req, res) {
        seccion = req.body;
        return section
        .create({
            name: seccion.name,
            img: seccion.img,
            has_quiz: seccion.has_quiz,
            status: true,
            order: seccion.order,
            courseId: seccion.courseId
        })
        .then(section => {
            res.status(201).send(section)
        })
        .catch(error => res.status(400).send(error));
    },
};