'use strict';

var Authentication = require('./controllers/authentication');
var LogEvent = require('./controllers/event_log');
var UpdateGoals = require('./controllers/update_goals');
var FetchData = require('./controllers/fetch_data');
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', { session: false });
var requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {

	app.post('/', function (req, res) {
		console.log(req.body);
		res.send('ok');
	});

	app.post('/signup', Authentication.signup);
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/logevent', requireAuth, LogEvent.logEvent);
	app.post('/goals', requireAuth, UpdateGoals.updateGoals);
	app.get('/data/:id', requireAuth, FetchData.fetchData);
};