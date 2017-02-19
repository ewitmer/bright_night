import React, { Component } from 'react';

export default class SignUp extends Component {

	handleSubmit(event) {
    event.preventDefault();

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
     body: JSON.stringify({email: "test@user.com",
 							password: "123"})
    })
    }

  render() {
    return (
      <div>
      	<button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
      </div>
    );
  }
}
