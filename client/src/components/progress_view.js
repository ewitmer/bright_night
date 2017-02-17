import React, { Component } from 'react';
import ProgressBar from './progress_bar';

export default class App extends Component {

  render() {
    return (
      <div>
      	<ProgressBar base="100" percent="0.1" hex="#FC6171"/>
      </div>
    );
  }
}
