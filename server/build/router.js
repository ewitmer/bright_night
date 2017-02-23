'use strict';

var Authentication = require('./controllers/authentication');
var LogEvent = require('./controllers/event_log');
var UpdateGoals = require('./controllers/update_goals');
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
	app.post('/_logevent', requireAuth, LogEvent.logEvent);
	app.get('/_logevent', requireAuth, LogEvent.getLogEvent);
	app.post('/_goals', requireAuth, UpdateGoals.updateGoals);
	app.get('/_goals', requireAuth, UpdateGoals.getGoals);
};