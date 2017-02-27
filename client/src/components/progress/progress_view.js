import React, { Component } from 'react';
import ProgressBar from './progress_bar';

export default class App extends Component {

  render() {

    return (
      <div className="Container-Progress">
      	<div className="Progress"><ProgressBar base="200" percent="0.3" hex="#FC6171"/></div>
      	<div className="Progress"><ProgressBar base="200" percent="0.5" hex="#FC6171"/></div>
      	<div className="Progress"><ProgressBar base="200" percent="0.1" hex="#FC6171"/></div>
      </div>
    );
  }
}
