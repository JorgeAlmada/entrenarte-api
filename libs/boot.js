var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');


module.exports = app => {

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    
    var models = require('../models');
    
    models.sequelize.sync().then(function() {
        console.log("Looking good.");
    }).catch(function(err) {
        console.log(err, "Oops.");
    });
    
    require('../routes')(app);

    
    const port = parseInt(process.env.PORT, 10) || 8000;
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port);

};