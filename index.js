var express = require("express");
var app = express();
var dao = require('./app/dao/dao');
var port = process.env.PORT || 8000;
require('./app/routes/routes')(app, dao);

app.listen(port, function(){
	console.log("gamasak listens to port: ", port);
});