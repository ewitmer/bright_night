import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './Navigation.css';


class Navigation extends Component {
	renderLinks() {
		//if user is authenticated,
		if (this.props.authenticated) {
			return [
				<li key={1} className={styles.Big}>
					<Link to="/signout">Sign Out</Link>
				</li>,
				<li key={2} className={Navigation}>
					<Link to="/log">Log Reading</Link>
				</li>,	
				<li key={3} className={Navigation}>
					<Link to="/goals">Set Goals</Link>
				</li>,
				<li key={4} className={Navigation}>
					<Link to="/progress">View Progress</Link>
				</li>
		]} else {
			return [
				<li key={1} className={styles.Big}>
					<Link to="/signin">Sign In</Link>
				</li>,
				<li key={2} className={styles.Big}>
					<Link to="/signup">Sign Up</Link>
				</li>
			];
		}

	}
	render() {
		return (
			<nav>
				<Link to="/">Logo</Link>
				<ul className={Navigation}>
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