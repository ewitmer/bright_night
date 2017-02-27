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
			return <li id={index} onClick={this.removeItem.bind(this)} key={index}>{comment}</li>
		})

		return (
			<ul className="comment-list">{list}</ul>
		)
	}
}

function mapStateToProps(state) {
	return { commentArray: state.logEvent.commentArray };
}

export default connect(mapStateToProps, actions)(CommentList);

