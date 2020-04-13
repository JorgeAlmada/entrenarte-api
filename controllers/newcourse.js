const course = require('../models').course;

module.exports = {
    async create(req, res) {
        curso = req.body;
        let img;
        if(req.file){
            img = req.file.path.substring([7]);
        } else {
            img = "images/coursepic.jpg";
        }

        console.log(curso)
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
        .create({
            name: curso.name,
            description: curso.description,
            about: curso.about,
            video: video,
            img: img,
            private: curso.private,
            rating: 0,
            timesrated: 0,
            students: 0,
            status: true,
            level: curso.level,
            order: curso.order,
            userId: curso.userId
        })
        .then(course => {
            res.status(201).send(course)
        })
        .catch(error => res.status(400).send(error));
    },
};