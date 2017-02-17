import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import store from '../store';
import CommentBox from './comment_box';
import CommentList from './comment_list';
import BookCounter from './book_counter';
import DatePicker from './date_picker';


export class EventSubmit extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const eventLog = store.getState().logEvent;
    store.dispatch(actions.saveEvent(eventLog));

    fetch('/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(eventLog)
    }).then(store.dispatch(actions.clearEvent()))
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
          <button action='submit'>Save Activity</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(EventSubmit);