import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Signin extends Component {

	handleFormSubmit(event) {
		event.preventDefault();
		if (this.props.authenticated) { 
			this.props.unauthUser()
		} else {
			const email = document.getElementById('email').value;
			const password = document.getElementById('password').value;
			this.props.signinUser({ email, password });
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
		const signedIn = (this.props.authenticated) ? "SIGN OUT" : "LOGIN";

		return (
			<div className="Form-container">
				<h1>Sign into your account:</h1>
				<div className="Form">
					<form className="Form-box" onSubmit={this.handleFormSubmit.bind(this)}>
						<fieldset>
							<input type="text" placeholder="email" id="email" />
						</fieldset>
						<fieldset>
							<input type="password" placeholder="password" id="password" />
						</fieldset>
						{this.renderAlert()}
						<fieldset>
							<button action="submit">{signedIn}</button>
						</fieldset>
						<fieldset>
							<p >Not registered? <Link to="/signup">Sign Up</Link></p>
						</fieldset>
					</form>
					
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.authentication.error,
			authenticated: state.authentication.authenticated }
}

export default connect(mapStateToProps, actions)(Signin);