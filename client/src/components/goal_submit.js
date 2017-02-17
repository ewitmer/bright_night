import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DayGoalCount from './day_goal';
import BookGoalCount from './book_goal';


export class GoalSubmit extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <h1>Set Your Reading Goals:</h1>
          <DayGoalCount />
          <BookGoalCount />
         <form id="goalForm" onSubmit={this.handleSubmit.bind(this)} className="goal-box">
          <button action='submit'>Update Goals</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(GoalSubmit);