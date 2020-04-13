const express = require('express');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const path = require('path');


module.exports = app => {
    app.use(express.static('public'));
    //app.use(express.static(path.join(__dirname, 'public')));

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE,PATCH,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Token");

        if (req.method === 'OPTIONS') {
           return res.send(200);
        };
        next();
    });


     app.use((req, res, next) => {
         
        if (req.path == "/user/login" || req.path == "/user/register"){
            next()
        } else {
            const token = req.headers.token;
                if (!token) {
                    return res.status(401).send('Debe iniciar sesión.');
                }
                jwt.verify(token, "tokendeacceso", async function (err, decoded) {
                    if (err) {
                        //return res.status(401).send('Su sesión ha expirado, vuelva a iniciar sesión.');
                        next()
                    }
                    else {
                        next()
                     }
                });
        }

       });

};