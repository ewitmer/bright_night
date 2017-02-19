import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import store from '../../store';

export class CommentBox extends Component {

	handleChange(event) {
		store.dispatch(actions.updateComment(event.target.value));
	}

	handleSubmit(event) {
		event.preventDefault();
		store.dispatch(actions.saveComment(store.getState().comment));
		document.getElementById('commentForm').reset();
	}

	render() {
		
		return (
			<form id="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-box">
				<textarea 
					value={this.props.comment}
					onChange={this.handleChange.bind(this)} />
				<button action='submit'>Add Thoughts</button>
			</form>
		)
	}
}

export default connect(null, actions)(CommentBox);