const User = require('../models/users');

exports.logEvent = function(req, res, next) {
	// check if user exists
	const id = req.body.id;
	const event = req.body.event;

	if (!id) {
		return res.status(422).send({error: "You must create an account"})
	}
	console.log(event)
	User.findByIdAndUpdate(id, { $push: {eventArray: event} }, function(err, user) {
		if (err) { return next(err) } 

		res.json({ 
			activity: user.eventArray,
			message: "Your reading has been saved!"
		});
	})
}