import React, { Component } from 'react';
import Header from './components/header';
import './App.css';
import SignUp from './components/sign_up'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <SignUp />
      </div>
    );
  }
}



