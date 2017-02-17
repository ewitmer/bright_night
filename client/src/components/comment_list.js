//functional component
import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
	const list = props.commentArray.map((comment, index) => <li key={index}>{comment}</li>)
	return (
		<ul className="comment-list">{list}</ul>
	);
}

function mapStateToProps(state) {
	return { commentArray: state.logEvent.commentArray };
}

export default connect(mapStateToProps)(CommentList);

