const Authentication = require('./controllers/authentication');
const LogEvent = require('./controllers/event_log');
const UpdateGoals = require('./controllers/update_goals');
const FetchData = require('./controllers/fetch_data');
const passportService = require('./services/passport');
const passport = require ('passport');

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {


	app.post('/', (req, res) => {
		console.log(req.body)
		res.send('ok')
	})

	app.post('/signup', Authentication.signup)
	app.post('/signin', requireSignin, Authentication.signin)
	app.post('/logevent', requireAuth, LogEvent.logEvent)
	app.post('/goals', requireAuth, UpdateGoals.updateGoals)
	app.get('/data/:id', requireAuth, FetchData.fetchData)
}