const section = require('../models').section;

module.exports = {
    async delete(req, res) {
        seccion = req.body;
        return section
        .update({
            status: false
        },
        {
            where: {id : seccion.id}
        })
        .then(section => {
            res.status(201).send(section)
        })
        .catch(error => res.status(400).send(error));
    },
};