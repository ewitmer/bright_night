import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import store from '../store';


export class TotalCount extends Component {
	
	constructor(props) {
		super(props);	
	}

	decrementClick() {
		store.dispatch(actions.decrement());
	}

	incrementClick() {
		store.dispatch(actions.increment());
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
    counter: state.logEvent.counter
});

export default connect(mapStateToProps)(TotalCount);
