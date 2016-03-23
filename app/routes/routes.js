
// load the todo model
var express = require("express");

// api ------------------------------
module.exports = function(app) {

    // app.use(express.static('public'));
    app.use('node_modules', express.static('./public/node_modules'));

    app.use('/api', require("./routes_api")); // auth
    app.use('/apitodo', require("./routes_todo"));

    // application --------------------
    // app.get('*', function(req, res) {
    //   // res.sendfile ('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    //   res.sendfile ('./public/index_auth.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });


};