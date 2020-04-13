const user = require('../models').user;
const validator = require('email-validator');
const password = require('secure-random-password');
var nodemailer = require('nodemailer');

module.exports = {
    async create(req, res) {
      console.log(req.body.params);
        usuario = req.body.params;
        var result = await user.findAll({
            where: {
              email: usuario.email
            }
          });
        if(!usuario.firstname || !usuario.lastname || !usuario.email || !usuario.gender){
            res.status(400).send('No deje ningún campo vacío');
        }
        else if(usuario.firstname == "" || usuario.lastname == "" || usuario.email == "" || usuario.password == "" || usuario.gender == ""){
            res.status(400).send('No deje ningún campo vacío.');
        }
        else if(!/^[a-zA-Z]+$/.test(usuario.firstname) || !/^[a-zA-Z]+$/.test(usuario.lastname)){
            res.status(400).send('Nombre sólo letras.');
        }
        else if(!validator.validate(usuario.email)){
            res.status(400).send('Email inválido.');
        }
        else if (result.length > 0)
        {
            res.status(400).send('Ya existe ese correo');
        } else {
        return user
        .create({
            firstname: usuario.firstname,
            lastname: usuario.lastname,
            email: usuario.email,
            password: password.randomPassword(),
            gender: usuario.gender,
            usertype: usuario.usertype,
            img: "images/profilepic.png"
        })
        .then(async function(user) {
            console.log('we creating');
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'entrenarte.example@gmail.com',
                  pass: 'Entrenarte123'
                }
              });

            const mailOptions = {
            from: 'entrenarte.example@gmail.com', // sender address
            to: user.email, // list of receivers
            subject: 'Contraseña Entrenarte', // Subject line
            html: '<p>Tu contraseña es ' + user.password + ' </p>'// plain text body
            };

            await transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             });
            

            res.status(201).send(user)
        })
        .catch(error => res.status(400).send(error));
        }
    },
};