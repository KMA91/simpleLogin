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
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    console.log(name);
    console.log(value);

    // this.setState({
    //   name : value
    // });
    console.log(event);
  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center loginForm">
          <div className="col-auto">
            <h4 className="text-center">Please log in.</h4>
            <form className="form-group">
              <input type="text" name="fName" onChange={this.handleChange} className="form-control loginForm--input" placeholder="First Name" value={this.state.fName} required/>
              <input type="text" name="lName" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Last Name" value={this.state.lName} required/>
              <input type="text" name="email" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Email" value={this.state.email} required/>
              <input type="text" name="password" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Password" value={this.state.password} required/>
              <input type="password" onChange={this.handleChange} name="passwordConfirmation" className="form-control loginForm--input" placeholder="Password Confirmation" value={this.state.passwordConfirmation} required/>
              <input type="password" name="passwordConf" className="hidden" placeholder="Password Confirmation" required/>
              <div className="loginForm--buttons justify-content-center">
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
