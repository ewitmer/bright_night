const User = require('../models/users');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const config = require('../../config')

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next) {
	// check if user exists
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({error: "You must provide an email and password"})
	}
	User.findOne({ email: email }, function(err, existingUser) {
		if (err) { return next(err) }

	// if it does, return error
		if (existingUser) {
			return res.status(422).send({ error: "Account already exists"})
		}

		const user = new User({
			email: email,
			password: password
		});

	// if it doesnt, create and save record
		user.save(function(err) {
			if (err) { return next(err) }
	
	//respond to request
		res.json({ token: tokenForUser(user) })

		});
	})

}

exports.signin = function(req, res, next) {
	// user has already had their email and pw auth;d;
	// need to give them token
	res.send({ token: tokenForUser(req.user)})

}
