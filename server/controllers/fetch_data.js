const User = require('../models/users');

exports.fetchData = function(req, res, next) {
	// check if user exists
	console.log(req.params)
	const id = req.params.id;

	if (!id) {
		return res.status(422).send({error: "You are not logged in"})
	}

	User.findById(id, function(err, user) {
		if (err) { return next(err) } 

		const totalBooks = user.eventArray.reduce((acc, val) => {
    		return acc + val.counter
  		},0);

		res.json({ 
			activity: user.eventArray,
			goals: user.goals,
			totalBooks: totalBooks

		});
	})
}