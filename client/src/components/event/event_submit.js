import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import store from '../../store';
import CommentBox from './comment_box';
import CommentList from './comment_list';
import BookCounter from './book_counter';
import DatePicker from './date_picker';


export class EventSubmit extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>    
      )}

    if (this.props.successMessage) {
      return (
        <div>{this.props.successMessage}</div>    
    )}
  }

  handleSubmit(e) {
    e.preventDefault();
    const eventLog = store.getState().logEvent;
    store.dispatch(actions.saveEvent(eventLog));
    this.props.logEvent(eventLog)
    this.props.clearEvent();
  }

  render() {
    return (
      <div>
          <h1>Log your reading:</h1>
          <DatePicker />
          <BookCounter />
          <CommentBox />
          <CommentList />
         <form id="eventForm" onSubmit={this.handleSubmit.bind(this)} className="event-box">
          {this.renderAlert()}
          <button action='submit'>Save Activity</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.authentication.error,
    successMessage: state.response

   }
}
export default connect(mapStateToProps, actions)(EventSubmit);