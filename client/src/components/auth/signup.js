import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

	validateEmail(email) {
	    // check valid email
	    var atpos = email.indexOf("@");
	    var dotpos = email.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
	        return false;
	    } else {
	    	return true;
	    }
	}

	validatePassword(password) {
		// check password length >= 6 chars
		if (password.length < 6) {
			return false
		} else {
	    	return true;
	    }
	}

	confirmPassword(password, passwordConfirm) {
		// check password matches passwordConfirm
		if (password !== passwordConfirm) {
			return false
		} else {
	    	return true;
	    }
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const passwordConfirm = document.getElementById('passwordConfirm').value;
		
		if (!this.validateEmail(email)) { 
			return this.props.authError('Please provide a valid email')
		} else if (!this.validatePassword(password)) {
			return this.props.authError('Password must be at least 6 characters')
		} else if (!this.confirmPassword(password, passwordConfirm)) {
			return this.props.authError('Passwords do not match')
		} else {
			return this.props.signupUser({ email, password });
		}
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div>{this.props.errorMessage}</div>		
			);
		}
	}

	render() {

		return (
			<form onSubmit={this.handleFormSubmit.bind(this)}>
				<fieldset>
					<label>Email</label>
					<input id="email" />
				</fieldset>
				<fieldset>
					<label>Password</label>
					<input type="password" id="password" />
				</fieldset>
				<fieldset>
					<label>Confirm Password</label>
					<input type="password" id="passwordConfirm" />
				</fieldset>
				{this.renderAlert()}
				<button action="submit">Sign Up</button>
			</form>
		)
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.authentication.error
	 }
}

export default connect(mapStateToProps, actions)(Signup);