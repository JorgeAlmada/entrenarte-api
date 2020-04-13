const section = require('../models').section;

module.exports = {
    async update(req, res) {
        seccion = req.body;
        return section
        .update({
            name: seccion.name,
            img: seccion.img
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