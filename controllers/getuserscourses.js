const userscourses = require('../models').userscourses;
const user = require('../models').user;

module.exports = {
    async getuserscourses(req, res) {
        usuario = req.body;
        console.log(usuario.userId);

        return user
        .findAll({
            where:{
                id : usuario.userId
            },
            include: [{all: true, nested: true}]
        }
        )
        .then(userscourses => {
            res.status(201).send(userscourses)
        })
        .catch(error => {res.status(400).send(error); console.log(error);});
    }
};