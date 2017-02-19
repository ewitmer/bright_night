import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

	
	authButton() {
		if (this.props.authenticated) {
			console.log(this.props)
			return <button onClick={() => this.props.unauthUser}>Sign Out</button>
		}
		return <button>Sign In</button>
	}

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
				<div>{this.props.errorMessage}</div>		
			);
		}
	}

	render() {
		const signedIn = (this.props.authenticated) ? "Sign Out" : "Sign In";

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
				{this.renderAlert()}
				<button action="submit">{signedIn}</button>
			</form>
		)
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.authentication.error,
			authenticated: state.authentication.authenticated }
}

export default connect(mapStateToProps, actions)(Signin);