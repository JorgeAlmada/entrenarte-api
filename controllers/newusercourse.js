const usercourse = require('../models').userscourses;

module.exports = {
    async create(req, res) {
        body = req.body;

        var result = await usercourse.findAll({
            where: {
              userId : body.userId,
              courseId : body.courseId
            }
          });

        if (result.length > 0)
        {
            res.status(400).send('Ese usuario ya está registrado a ese curso');
        } else {
            return usercourse
            .create({
                userId : body.userId,
                courseId : body.courseId
            })
            .then(course => {
                res.status(201).send(course)
            })
            .catch(error => res.status(400).send(error));
        }

        
    },
};