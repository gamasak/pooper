var notificationRoutes = require('./notificationRoutes');
module.exports = function(app, dao){
	notificationRoutes(app, dao);
}