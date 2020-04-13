const userController = require('../controllers').user;
const loggerController = require('../controllers').logger;

module.exports = (app) => {
    app.get('/user', (req, res) => res.status(200).send({
        message: 'We good',
    }));

    app.post('/user/loginx', loggerController.login);

    app.post('/user/dog', async function(req,res) {
        res.status(201).send('puppers')
    });

    app.post('/user/register', userController.create);

}