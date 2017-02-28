import React, { Component } from 'react';
import EventSubmit from './event_submit';
import TotalBooks from '../progress/total_books'

export default class DisplayLog extends Component {


	render() {
		return (
			<div className="Log-container">
				<EventSubmit />
				<TotalBooks />
			</div>
		)
	}
}
