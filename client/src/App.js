import React, { Component } from 'react';
import Header from './components/nav/header';
import './App.css';
import SignUp from './components/auth/sign_up'

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


