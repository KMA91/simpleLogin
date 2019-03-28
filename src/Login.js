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
      passwordConfirmation: "",
      fNameValid: false,
      lNameValid: false,
      emailValid: false,
      passwordValid: false,
      passwordMatch: false,
      testRegEmail: "test@test.com" // Used as a sample test registration email
    };

    this.handleChange = this.handleChange.bind(this); // bind method to class instance, so it is accessible when called in form
  }

  handleChange = event => {
    event.preventDefault();
    const formName = event.target.name;
    const value = event.target.value;
    // console.log("name: " + formName);
    // console.log("value: " + value);

    this.setState({
      [formName] : value
    });

    this.validateInput();
  }

  validateInput = () => {
    console.log("validation now");
    // let validRegistration = true;
    //
    // if (formName === "email" && value === this.state.testRegEmail) { // Check if email is already used (testRegEmail)
    //   console.log("error");
    // }
    //
    // if (this.state.password === this.state.passwordConfirmation) { // Check is passwords match
    //   console.log("password error");
    // }
    //
    // if (this.state.password.length < 7) { // Check password length
    //   console.log("password too short");
    // }
    //
    // if (validRegistration) {
    //   // send POST request with form input to backend to save to the DB
    // }
  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center loginForm">
          <div className="col-auto">
            <h4 className="text-center">Please log in.</h4>
            <form className="form-group">

                <div className="fieldGrp">
                  <div className="invalid-feedback">
                  Please choose a username.
                  </div>
                  <input type="text" name="fName" onChange={this.handleChange} className="form-control loginForm--input" placeholder="First Name" value={this.state.fName} pattern="^[a-zA-Z]+$" required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback display-block">
                  Please choose a username.
                  </div>
                  <input type="text" name="lName" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Last Name" value={this.state.lName} pattern="^[a-zA-Z][A-Za-z0-9\. ]*$" required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback">
                  Please choose a username.
                  </div>
                  <input type="text" name="email" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Email" value={this.state.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback">
                  Please choose a username.
                  </div>
                  <input type="password" name="password" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Password" minLength="8" maxLength="15" value={this.state.password} required/>
                </div>

                <div className="fieldGrp">
                  <div className="invalid-feedback">
                  Please choose a username.
                  </div>
                  <input type="password" name="passwordConfirmation" onChange={this.handleChange} className="form-control loginForm--input" placeholder="Password Confirmation" minLength="8" maxLength="15" value={this.state.passwordConfirmation} required/>
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

// <div className="container">
//   <div className="row justify-content-center loginForm">
//     <div className="col-auto">
//       <h4 className="text-center">Please log in.</h4>
//       <form className="form-group">
//
//           <div className="fieldGrp">
//             <div className="invalid-feedback display-block">
//             Please choose a username.
//             </div>
//             <input type="text" name="fName" onChange={this.handleChange} className="form-control is-invalid loginForm--input" placeholder="First Name" value={this.state.fName} pattern="^[a-zA-Z]+$" required/>
//           </div>
//
//           <div className="fieldGrp">
//             <div className="invalid-feedback display-block">
//             Please choose a username.
//             </div>
//             <input type="text" name="lName" onChange={this.handleChange} className="form-control is-invalid loginForm--input" placeholder="Last Name" value={this.state.lName} pattern="^[a-zA-Z][A-Za-z0-9\. ]*$" required/>
//           </div>
//
//           <div className="fieldGrp">
//             <div className="invalid-feedback display-block">
//             Please choose a username.
//             </div>
//             <input type="text" name="email" onChange={this.handleChange} className="form-control is-valid loginForm--input" placeholder="Email" value={this.state.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
//           </div>
//
//           <div className="fieldGrp">
//             <div className="invalid-feedback display-block">
//             Please choose a username.
//             </div>
//             <input type="password" name="password" onChange={this.handleChange} className="form-control is-valid loginForm--input" placeholder="Password" minLength="8" maxLength="15" value={this.state.password} required/>
//           </div>
//
//           <div className="fieldGrp">
//             <div className="invalid-feedback display-block">
//             Please choose a username.
//             </div>
//             <input type="password" name="passwordConfirmation" onChange={this.handleChange} className="form-control is-valid loginForm--input" placeholder="Password Confirmation" minLength="8" maxLength="15" value={this.state.passwordConfirmation} required/>
//           </div>
//
//           <input type="password" name="passwordConf" className="hidden" placeholder="Password Confirmation"/>
//           <div className="center-content m-1 mt-4">
//             <button className="btn btn-danger">Register</button>
//           </div>
//
//           <div className="loginForm--buttons justify-content-center m-1 mt-3">
//             <button className="btn btn-primary" onClick={this.handleChange}>Login</button>
//             <button className="btn btn-danger">Register</button>
//           </div>
//       </form>
//     </div>
//   </div>
// </div>
