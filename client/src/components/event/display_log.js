import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import store from '../../store';

export class DisplayLog extends Component {

	handleChange(event) {

		store.dispatch(actions.saveDate(event.target.value));
	}

	render() {
		return (
			<div>
				<input type="date" value={this.props.date} onChange={this.handleChange}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    date: state.logEvent.date
});

export default connect(mapStateToProps)(DisplayLog);