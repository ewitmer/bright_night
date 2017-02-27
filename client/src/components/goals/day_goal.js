import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import store from '../../store';


export class DayGoalCount extends Component {

	decrementClick() {
		store.dispatch(actions.dayGoalDecrement());
	}

	incrementClick() {
		store.dispatch(actions.dayGoalIncrement());
	}

	render() {
		return (
		<div className="Goal-counter">
			<div className="Button-small">
				<button onClick={this.decrementClick}>-</button>
				<button onClick={this.incrementClick}>+</button>
				<span className="Event-medium">{this.props.counter}</span> days / week
			</div>
		</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
    counter: state.goals.goalDays
});

export default connect(mapStateToProps)(DayGoalCount);