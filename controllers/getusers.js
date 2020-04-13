const user = require('../models').user;

module.exports = {
    async getusers(req, res) {
        usuario = req.body;
        return user
        .findAll({
            where:{
            },
            include: []
        }
        )
        .then(user => {
            res.status(201).send(user)
        })
        .catch(error => {res.status(400).send(error); console.log(error);});
    }
};