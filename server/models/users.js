import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

// define model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

// before saving a model, run this function
userSchema.pre('save', function(next){
	
	// get access of user model, user is instance of user model
	const user = this;

	// generate a salt then run callback
	bcrypt.genSalt(10, function(err, salt){
		if (err) { return next (err); }

	// hash password using the salt
	bcrypt.hash(user.password, salt, null, function(err, hash) {
		if (err) { return next(err); }

		// overwrite plain text pw with encrypted pw
		user.password = hash;
		
		// save
		next();
		});	
	});
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    	if (err) {return callback(err)}

    	callback(null, isMatch);
    		
	});
}

// create model class
const ModelClass = mongoose.model('user', userSchema);


// export model
module.exports = ModelClass;