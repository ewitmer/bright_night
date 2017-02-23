'use strict';

var User = require('../models/users');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var config = require('../../config');

function tokenForUser(user) {
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function (req, res, next) {
	// check if user exists
	var email = req.body.email;
	var password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({ error: "You must provide an email and password" });
	}
	User.findOne({ email: email }, function (err, existingUser) {
		if (err) {
			return next(err);
		}

		// if it does, return error
		if (existingUser) {
			return res.status(422).send({ error: "Account already exists" });
		}

		var user = new User({
			email: email,
			password: password,
			eventArray: [],
			goals: { goalBooks: 3, goalDays: 5 }

		});
		console.log(user);
		// if it doesnt, create and save record
		user.save(function (err) {
			if (err) {
				return next(err);
			}

			//respond to request
			res.json({
				token: tokenForUser(user),
				user: user.id });
		});
	});
};

exports.signin = function (req, res, next) {
	// user has already had their email and pw auth;d;
	// need to give them token
	res.json({
		token: tokenForUser(req.user),
		user: req.user.id });
};