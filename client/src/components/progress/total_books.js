import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store';

export class TotalBooks extends Component {

	render() {

		return (
			<div className="Total-container">
				<div className="Total-box">
					<h1>Books Read to Date:</h1>
					<div className="Extra-large">{this.props.totalBooks}</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { totalBooks: state.totals };
}

export default connect(mapStateToProps)(TotalBooks);

