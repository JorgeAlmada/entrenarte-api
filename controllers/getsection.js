const section = require('../models').section;

module.exports = {
    async getsection(req, res) {
        usuario = req.body.params;
        return section
        .findAll({
            where:{
                id: 1
            },
            include: [{
                all: true, nested: true
            }]
        }
        )
        .then(section => {
            res.status(201).send(section)
        })
        .catch(error => res.status(400).send(error));
    }
};