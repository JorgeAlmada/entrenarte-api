const logger = require('../models').user;
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {
        usuario = req.body.params;
        return logger
        .findAll({
            where:{
            email: usuario.email,
            password: usuario.password
            }
        })
        .then(logger => {
            const token = jwt.sign({
                email: logger[0].dataValues.email,
                id: logger[0].dataValues.id
              }, "tokendeacceso", { expiresIn: "1h" });  
              logger[0].dataValues.token = token;
            logger.length == 0 ? res.status(400).send('Credenciales invalidas') : res.status(201).send(logger)
        })
        .catch(error => res.status(400).send(error));
    }
};