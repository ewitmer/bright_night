//functional component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import store from '../../store';

export class CommentList extends Component {

	removeItem(e) {
		 store.dispatch(actions.deleteComment(e.target.id));
	}

	render() {
		const list = this.props.commentArray.map((comment, index) => { 
			return <li className="Comment-item" key={index}>{comment}<button id={index} onClick={this.removeItem.bind(this)} >x</button></li>
		})

		return (
			<div className="Comment-list">
				<ul>{list}</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { commentArray: state.logEvent.commentArray };
}

export default connect(mapStateToProps, actions)(CommentList);

