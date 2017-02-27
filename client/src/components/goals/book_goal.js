import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import store from '../../store';


export class BookGoalCount extends Component {

	decrementClick() {
		store.dispatch(actions.bookGoalDecrement());
	}

	incrementClick() {
		store.dispatch(actions.bookGoalIncrement());
	}

	render() {
		return (
			<div className="Book-counter">
				<div className="Button-small">
					<button onClick={this.decrementClick}>-</button>
					<button onClick={this.incrementClick}>+</button>
					<span className="Event-large">{this.props.counter} books / day</span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
    counter: state.goals.goalBooks,
});

export default connect(mapStateToProps, actions)(BookGoalCount);