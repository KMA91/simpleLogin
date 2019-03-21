import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center loginForm">
          <div className="col-auto">
            <h4 className="text-center">Please log in.</h4>
            <form onSubmit={this.handleSubmit} className="form-group">
              <input type="text" className="form-control loginForm--input" placeholder="Email" required/>
              <input type="text" className="form-control loginForm--input" placeholder="Password" required/>
              <div className="loginForm--buttons justify-content-center">
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-danger">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
