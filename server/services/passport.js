const passport = require('passport');
const User = require('../models/users');
const config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	//verify email and pw, call done with the user
	User.findOne({ email: email }, function(err, user) {
		if (err) { return done(err); }
		if (!user) { return done(null, false); }

		// compare submitted hashed pw to db hashed pw
		user.comparePassword(password, function(err, isMatch) {
			if (err) { return done(err) }
			if (!isMatch) { return done(null, false); }

			return done(null, user);
		});
	})
})
// set up options for JWT strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	// See if the user ID in the payload exists
	// if it does, call done with 
	// otherwise, call done without a user object

	User.findById(payload.sub, function(err, user){
		if (err) { return done(err, false) };

		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	})
})

passport.use(jwtLogin);
passport.use(localLogin);