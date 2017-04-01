import React, { Component } from 'react';
import ProgressBar from './progress_bar';
import { connect } from 'react-redux';

export class Progress extends Component {

  render() {

    return (
      <div className="Container-Progress">
      	<div>You met your daily reading goal on {this.props.goalDays} out of {this.props.totalDays} days. </div>
      	<div className="Progress"><ProgressBar base="200" percent={ this.props.daysRatio } hex="#FC6171"/></div>
      	<div>You met your weekly reading goal on {this.props.goalWeeks} out of {this.props.totalWeeks} weeks. </div>
      	<div className="Progress"><ProgressBar base="200" percent={ this.props.weeksRatio } hex="#FC6171"/></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	totalDays: state.progressDay.totalDays,
	goalDays: state.progressDay.goalDays,
    daysRatio: state.progressDay.ratioDays,
    totalWeeks: state.progressWeek.totalWeeks,
    goalWeeks: state.progressWeek.goalWeeks,
    weeksRatio: state.progressWeek.ratioWeeks
});

export default connect(mapStateToProps)(Progress);