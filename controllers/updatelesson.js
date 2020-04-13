const lesson = require('../models').lesson;

module.exports = {
    async update(req, res) {
        leccion = req.body;

        let myfile;
        if(req.file){
            myfile = req.file.path.substring([7]);
        } else {
            myfile = leccion.file;
        }

        function getId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
        
            return (match && match[2].length === 11)
              ? match[2]
              : null;
        }
            
        const videoId = getId(leccion.video);
        const video = 'https://www.youtube.com/embed/' + videoId;
        
        console.log('Link = ' + video);
        return lesson
        .update({
            name: leccion.name,
            video: video,
            file: myfile
        },
        {
            where: {id : leccion.id}
        })
        .then(async () => {
            //res.status(201).send(profilechanger)
            var result = await lesson.findAll({
                where: {
                  id: leccion.id
                }
              })
            res.status(201).send(result)
        })
        .catch(error => res.status(400).send(error));
    },
};