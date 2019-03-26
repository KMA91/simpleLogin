import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "",
      lName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };

    this.handleChange = this.handleChange.bind(this); // bind method to class instance, so it is accessible when called in form
  }

  handleChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log("name: " + name);
    console.log("value: " + value);

    this.setState({
      [name] : value
    });

  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center loginForm">
          <div className="col-auto">
            <h4 className="text-center">Please log in.</h4>
            <form className="form-group">

                <div className="fieldGrp">
                  <div className="invalid-feedback display-block">
                  Please choose a username.
                  </div>
                  <input type="text" name="fName" onChange={this.handleChange} className="form-control is-invalid loginForm--input" placeholder="First Name" value={this.state.fName} required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback display-block">
                  Please choose a username.
                  </div>
                  <input type="text" name="lName" onChange={this.handleChange} className="form-control is-invalid loginForm--input" placeholder="Last Name" value={this.state.lName} required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback display-block">
                  Please choose a username.
                  </div>
                  <input type="text" name="email" onChange={this.handleChange} className="form-control is-valid loginForm--input" placeholder="Email" value={this.state.email} required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback display-block">
                  Please choose a username.
                  </div>
                  <input type="password" name="password" onChange={this.handleChange} className="form-control is-valid loginForm--input" placeholder="Password" value={this.state.password} required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback display-block">
                  Please choose a username.
                  </div>
                  <input type="password" name="passwordConfirmation" onChange={this.handleChange} className="form-control is-valid loginForm--input" placeholder="Password Confirmation" value={this.state.passwordConfirmation} required/>
                </div>

                <input type="password" name="passwordConf" className="hidden" placeholder="Password Confirmation"/>
                <div className="center-content m-1 mt-4">
                  <button className="btn btn-danger">Register</button>
                </div>

                <div className="loginForm--buttons justify-content-center m-1 mt-3">
                  <button className="btn btn-primary" onClick={this.handleChange}>Login</button>
                  <button className="btn btn-danger">Register</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
