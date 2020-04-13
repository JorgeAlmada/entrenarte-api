const pswchanger = require('../models').user;

module.exports = {
    async changepassword(req, res) {
        usuario = req.body;

        var result = await pswchanger.findAll({
            where: {
              id: usuario.id,
              password: usuario.oldpassword
            }
          })
        if(result == 0) {
            res.status(400).send('Contraseña incorrecta');
        } else {
        return pswchanger
        .update({
            password: usuario.password
        }, {
            where: {
            id: usuario.id
            }
        }
        )
        .then(pswchanger => {
            res.status(201).send(pswchanger)
        })
        .catch(error => res.status(400).send(error));
    }
    }
};