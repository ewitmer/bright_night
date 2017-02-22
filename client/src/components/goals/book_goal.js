import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import store from '../../store';


export class BookGoalCount extends Component {

	componentWillMount() {
		this.props.fetchMessage();
	}

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
				{this.props.message}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
    counter: state.goals.goalBooks,
    message: state.authentication.message
});

export default connect(mapStateToProps, actions)(BookGoalCount);