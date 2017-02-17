import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions'


class Header extends Component {
	authButton() {
		if (this.props.authenticated) {
			return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
		}
		return <button onClick={() => this.props.authenticate(true)}>Sign In</button>
	}

	authenticateUser() {
		fetch('/signin', {
      	method: 'POST',
      	headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      	},
     	body: JSON.stringify({email: "test@user.com",
 							password: "123"})
    	}).then(function(response){
    		console.log(response)
    	})
	}

	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/log">Log Reading</Link>
					</li>	
					<li>
						<Link to="/goals">Set Goals</Link>
					</li>
					<li>
						<Link to="/progress">View Progress</Link>
					</li>
					{this.authButton()}
					<button onClick={this.authenticateUser.bind(this)}>Click Me</button>
				</ul>
			</nav>

			)
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authentication}
}
export default connect(mapStateToProps, actions)(Header);