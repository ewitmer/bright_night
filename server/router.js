const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require ('passport');

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
	app.get('/auth', requireAuth, function(req, res){
		res.send({message: "Super secret code"})
	})
	app.get('/', (req, res, next) => {
		res.send('ok')
	})

	app.post('/', (req, res) => {
		console.log(req.body)
		res.send('ok')
	})

	app.post('/signup', Authentication.signup)
	app.post('/signin', requireSignin, Authentication.signin)
}