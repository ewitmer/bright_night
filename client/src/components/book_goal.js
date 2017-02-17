import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import store from '../store';


export class BookGoalCount extends Component {

	decrementClick() {
		store.dispatch(actions.bookGoalDecrement());
	}

	incrementClick() {
		store.dispatch(actions.bookGoalIncrement());
	}

	render() {
		return (
			<div>
				{this.props.counter}
				<button onClick={this.decrementClick}>-</button>
				<button onClick={this.incrementClick}>+</button>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
    counter: state.goals.goalBooks
});

export default connect(mapStateToProps)(BookGoalCount);