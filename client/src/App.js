import React, { Component } from 'react';
import './App.css';
import Navigation from './components/nav/navigation';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}



