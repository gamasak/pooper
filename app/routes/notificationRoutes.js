var routePrefix = '/notification';
module.exports = function(app, dao){
	app.get(routePrefix, function(req, res){
		res.send("poop!");
	})
}