import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Navigation extends Component {
	renderLinks() {
		//if user is authenticated,
		if (this.props.authenticated) {
			return <li>
				<Link to="/signout">Sign In</Link>
			</li>
		} else {
			return [
				<li key={1}>
					<Link to="/signin">Sign In</Link>
				</li>,
				<li key={2}>
					<Link to="/signup">Sign Up</Link>
				</li>
			];
		}

	}
	render() {
		return (
			<nav>
				<Link to="/">Redux Auth</Link>
				<ul>
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