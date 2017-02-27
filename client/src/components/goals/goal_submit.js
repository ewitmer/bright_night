import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DayGoalCount from './day_goal';
import BookGoalCount from './book_goal';


export class GoalSubmit extends Component {

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

  handleSubmit(event) {
    event.preventDefault();
    const goalBooks = this.props.goalBooks;
    const goalDays = this.props.goalDays;
    this.props.updateGoals({goalBooks, goalDays})
  }

  render() {
    return (
      <div className="Goals-container">
          <div className="Goals-box">
            <h1>Set Your Reading Goals:</h1>
            <DayGoalCount />
            <BookGoalCount />
            {this.renderAlert()}
            <button onClick={this.handleSubmit.bind(this)}>Update Goals</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    goalBooks: state.goals.goalDays, 
    goalDays: state.goals.goalDays,
    errorMessage: state.authentication.error,
    successMessage: state.response

});

export default connect(mapStateToProps, actions)(GoalSubmit);