
 // set up ========================
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan"); // log requests to console
var bodyParser = require("body-parser") ;
var methodOverride = require("method-override");

// config =========================

var configAuth = require('./config/auth');
app.set('superSecret', configAuth.secret);

var configDatabase = require('./config/database');
mongoose.connect(configDatabase.url);

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// load routes ======================
require('./app/routes/routes.js')(app);


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
