"use strict";

var User = require('../models/users');

exports.logEvent = function (req, res, next) {
	// check if user exists

	var id = req.body.id;
	var event = req.body.event;

	if (!id) {
		return res.status(422).send({ error: "You must create an account" });
	}

	User.findByIdAndUpdate(id, { $push: { eventArray: event } }, function (err, user) {
		if (err) {
			return next(err);
		}

		res.json({
			activity: user.eventArray,
			message: "Your reading has been saved!"
		});
	});
};

exports.getLogEvent = function (req, res, next) {
	// check if user exists
	console.log(req.body);
	var id = req.body.id;

	if (!id) {
		return res.status(422).send({ error: "You are not logged in" });
	}

	User.findById(id, function (err, user) {
		if (err) {
			return next(err);
		}

		res.json({
			activity: user.eventArray
		});
	});
};