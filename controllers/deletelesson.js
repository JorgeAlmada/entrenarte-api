const lesson = require('../models').lesson;

module.exports = {
    async delete(req, res) {
        leccion = req.body;
        return lesson
        .update({
            status: false
        },
        {
            where: {id : leccion.id}
        })
        .then(lesson => {
            res.status(201).send(lesson)
        })
        .catch(error => res.status(400).send(error));
    },
};