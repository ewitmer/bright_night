"use strict";

var User = require('../models/users');

exports.logEvent = function (req, res, next) {
	// check if user exists

	var id = req.body.id;
	var event = req.body.event;

	if (!id) {
		return res.status(422).send({ error: "You must create an account" });
	}

	User.findByIdAndUpdate(id, { $push: { eventArray: event } }, { new: true }, function (err, user) {
		if (err) return next(err);

		var totalBooks = user.eventArray.reduce(function (acc, val) {
			return acc + val.counter;
		}, 0);

		console.log(totalBooks);

		res.json({
			activity: user.eventArray,
			totalBooks: totalBooks,
			message: "Your reading has been saved!"
		});
	});
};