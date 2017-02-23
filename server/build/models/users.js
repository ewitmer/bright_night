'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

// define model
var userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,
	eventArray: [],
	goals: { goalBooks: Number, goalDays: Number }
});

// before saving a model, run this function
userSchema.pre('save', function (next) {

	// get access of user model, user is instance of user model
	var user = this;

	// generate a salt then run callback
	_bcryptNodejs2.default.genSalt(10, function (err, salt) {
		if (err) {
			return next(err);
		}

		// hash password using the salt
		_bcryptNodejs2.default.hash(user.password, salt, null, function (err, hash) {
			if (err) {
				return next(err);
			}

			// overwrite plain text pw with encrypted pw
			user.password = hash;

			// save
			next();
		});
	});
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
	_bcryptNodejs2.default.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) {
			return callback(err);
		}

		callback(null, isMatch);
	});
};

// create model class
var ModelClass = _mongoose2.default.model('user', userSchema);

// export model
module.exports = ModelClass;