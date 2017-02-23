const User = require('../models/users');

exports.updateGoals = function(req, res, next) {
	// check if user exists
	const id = req.body.id;
	const goalBooks = req.body.goalBooks;
	const goalDays = req.body.goalDays;

	if (!id) {
		return res.status(422).send({error: "You must create an account"})
	}
	console.log(req.body)
	
	User.findByIdAndUpdate(id, { $set: { goals: {goalBooks: goalBooks, goalDays: goalDays} } }, function(err, user) {
		if (err) { return next(err) } 

		res.json({ 
			goals: user.goals,
			message: "Your goals have been updated!"
		});
	})
}

exports.getGoals = function(req, res, next) {
	// check if user exists
	const id = req.body.id;
	console.log(req.body)
	if (!id) {
		return res.status(422).send({error: "You are not logged in"})
	}

	User.findById(id, function(err, user) {
		if (err) { return next(err) } 

		res.json({ 
			activity: user.goals
		});
	})
}