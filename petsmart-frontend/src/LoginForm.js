// src/LoginForm.js

import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';
import './LoginForm.css';
import logo from './logo.png'
export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => this.setState({
      sessionToken: res.sessionToken
    }))
    .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    }
      

      
    return (
        <div class="container">
        <img src={logo}></img>
        <form onSubmit={this.handleSubmit}>
        <label>
          <b>Username:</b>
          <input
            id="username" type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder = "Enter Username"
            required />
        <b>Password:</b>
          <input
            id="password" type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Enter Password"
            required/>
        <input id="submit" type="submit" value="Submit" />
        </label>
        

      </form>
        </div>

    );
  }
});
