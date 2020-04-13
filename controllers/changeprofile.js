const profilechanger = require('../models').user;
module.exports = {
    async changeprofile(req, res) {
        usuario = req.body;
        let img;
        if(req.file){
            img = req.file.path.substring([7]);
        } else {
            img = req.body.img;
        }
        var result = await profilechanger.findAll({
            where: {
              id: usuario.id
            }
          })
        if(result == 0) {
            res.status(400).send('Ha habido un error');
        } else {
        return profilechanger
        .update({
            firstname: usuario.firstname,
            lastname: usuario.lastname,
            email: usuario.email,
            img: img
        }, {
            where: {
            id: usuario.id
            }
        }
        )
        .then(async () => {
            //res.status(201).send(profilechanger)
            var result = await profilechanger.findAll({
                where: {
                  id: usuario.id
                }
              })
            res.status(201).send(result)
        })
        .catch(error => res.status(400).send(error));
    }
    }
};