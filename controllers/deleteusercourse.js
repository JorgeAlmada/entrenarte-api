const usercourse = require('../models').userscourses;

module.exports = {
    async delete(req, res) {
        body = req.body;
            return usercourse
            .destroy({
                where : {
                    userId : body.userId,
                    courseId : body.courseId
                }
            })
            .then(function() {
                res.sendStatus(201);
            })
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
            

        
    },
};