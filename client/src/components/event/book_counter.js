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
			console.log(store)
		return (
			<div className="Book-counter">
				<div className="Button-small">
					<button onClick={this.decrementClick}>-</button>
					<button onClick={this.incrementClick}>+</button>
					<span className="Event-large">{this.props.count} books</span>
				</div>
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
