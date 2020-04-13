const course = require('../models').course;

module.exports = {
    async update(req, res) {
        curso = req.body;
        let img;
        if(req.file){
            img = req.file.path.substring([7]);
        } else {
            img = req.body.img;
        }

        function getId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
        
            return (match && match[2].length === 11)
              ? match[2]
              : null;
        }
            
        const videoId = getId(curso.video);
        const video = 'https://www.youtube.com/embed/' + videoId;

        return course
        .update({
            name: curso.name,
            description: curso.description,
            about: curso.about,
            private: curso.private,
            img: img,
            video: video
        },
        {
            where: {id : curso.id}
        })
        .then(async () => {
            //res.status(201).send(profilechanger)
            var result = await course.findAll({
                where: {
                  id: curso.id
                }
              })
            res.status(201).send(result)
        })
        .catch(error => res.status(400).send(error));
    },
};