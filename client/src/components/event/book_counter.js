import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import store from '../../store';

export class BookCounter extends Component {

	decrementClick() {
		store.dispatch(actions.bookDecrement());
	}

	incrementClick() {
		store.dispatch(actions.bookIncrement());
	}

	render() {
		return (
			<div>
				{this.props.count}
				<button onClick={this.decrementClick}>-</button>
				<button onClick={this.incrementClick}>+</button>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {

  return {
    count: state.logEvent.counter
  }
}

export default connect(mapStateToProps)(BookCounter);
