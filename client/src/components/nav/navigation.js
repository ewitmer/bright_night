import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Navigation extends Component {
	renderLinks() {
		//if user is authenticated,
		if (this.props.authenticated) {
			return [
				<li key={0} >
					<Link to="/">Home</Link>
				</li>,
				<li key={1} >
					<Link to="/signout">Sign Out</Link>
				</li>,
				<li key={2} >
					<Link to="/log">Log Reading</Link>
				</li>,	
				<li key={3} >
					<Link to="/goals">Set Goals</Link>
				</li>,
				<li key={4} >
					<Link to="/progress">View Progress</Link>
				</li>
		]} else {
			return [
				<li key={0} >
					<Link to="/">Home</Link>
				</li>,
				<li key={1} >
					<Link to="/signin">Sign In</Link>
				</li>,
				<li key={2} >
					<Link to="/signup">Sign Up</Link>
				</li>
			];
		}

	}
	render() {
		return (
			<nav>
				<ul className="Navigation">
					{this.renderLinks()}
				</ul>
			</nav>
			)
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.authentication.authenticated
	}
}

export default connect(mapStateToProps)(Navigation);