import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';

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
				<div className="Error-msg">{this.props.errorMessage}</div>		
			);
		}
	}

	render() {

		return (
			<div className="Form-container">
				<h1>Create an account:</h1>
				<div className="Form">	
					<form className="Form-box" onSubmit={this.handleFormSubmit.bind(this)}>
						<fieldset>
							<input type="text" placeholder="email" id="email" />
						</fieldset>
						<fieldset>
							<input type="password" placeholder="password" id="password" />
						</fieldset>
						<fieldset>
							<input type="password" placeholder="confirm password" id="passwordConfirm" />
						</fieldset>
						{this.renderAlert()}
						<fieldset>
							<button action="submit">Sign Up</button>
						</fieldset>
						<fieldset>
							<p >Already registered? <Link to="/signin">Sign In</Link></p>
						</fieldset>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.authentication.error
	 }
}

export default connect(mapStateToProps, actions)(Signup);