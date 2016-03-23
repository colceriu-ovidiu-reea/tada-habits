
var express = require("express");
var jwt = require('jsonwebtoken');
var User = require('../models/user');

var Auth = require('../middleware/auth');

var apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + '/api');
});

apiRoutes.post('/authenticate', function(req, res) {

    User.findOne({
        name: req.body.name
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Auth failed. U not found.' });

            return false;
        }

        console.log(user);

        if (user.password != req.body.password) {
            res.json({ success: false, message: 'Auth failed. wrong P.'});

            return false;
        }

        var token = jwt.sign(user, req.app.get('superSecret'), {
            expirationInMinuted: 1440
        });

        res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
        });
    });
});

apiRoutes.use(Auth.verifyToken);

apiRoutes.get('/users', function(req, res) {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

apiRoutes.get('/testauth', function(req, res) {
    var testRes = {
        testname: 'balci'
    };

    res.json(testRes);
});

module.exports = apiRoutes;
