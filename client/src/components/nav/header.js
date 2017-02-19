import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {

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
				</ul>
			</nav>

			)
	}
}
