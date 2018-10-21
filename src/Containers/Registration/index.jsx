import React, { Component } from "react";
import { Redirect } from "react-router";
import Overlay from "@Components/OverlayComponent";
import { registerUser } from "@BusinessLayer/Register/RegisterManager";
import { getUser } from "@BusinessLayer/Login/LoginManager";
import validateEmail from "@Helpers/emailValidation";

import "./index.css";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      validateUserInfo: {
        fullName: null,
        password: null,
        confirmPassword: null,
        email: null
      },
      userInfo: {
        fullName: "",
        password: "",
        confirmPassword: "",
        email: ""
      },
      fullUserInfo: null,
      isOverlayVisible: false,
      isUserRegisteredSuccessfully: false
    };
  }

  componentDidMount() {
    document.title = "Login";
  }

  handleUserInput = e => {
    const { userInfo, validateUserInfo } = this.state;
    const targetName = e.target.name;
    const targetValue = e.target.value;
    if (targetName === "email")
      validateUserInfo[targetName] =
        targetValue !== "" && validateEmail(targetValue);
    else validateUserInfo[targetName] = targetValue !== "";
    userInfo[targetName] = targetValue;
    this.setState({ userInfo });
  };

  registerUser = () => {
    const { userInfo } = this.state;

    this.setState({ isOverlayVisible: true });
    registerUser(userInfo)
      .then(() => this.getUser())
      .catch(err => console.log(err));
  };

  getUser = () => {
    getUser(5).then(response =>
      this.setState({
        isUserRegisteredSuccessfully: true,
        fullUserInfo: response.data
      })
    );
  };

  redirectToProfile = () => {
    const { isUserRegisteredSuccessfully, fullUserInfo } = this.state;
    if (isUserRegisteredSuccessfully)
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: {
              fullUserInfo: fullUserInfo
            }
          }}
        />
      );
  };

  disableRegisterButton = () => {
    const { validateUserInfo, userInfo } = this.state;
    return !(
      validateUserInfo.fullName &&
      validateUserInfo.email &&
      userInfo.password === userInfo.confirmPassword &&
      validateUserInfo.password !== "" &&
      validateUserInfo.password !== null
    );
  };

  render() {
    const { isOverlayVisible } = this.state;

    return (
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
            <div className="card card-background">
              <div className="card-body">
                <img
                  className="mx-auto d-block logo"
                  src="http://zwaar.net/media/new/images/logo_en_b.svg"
                  alt="logo"
                />
                <h5 className="card-title text-center m-4">
                  Register to Zwaar
                </h5>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    aria-describedby="fullName"
                    placeholder="Enter full name"
                    onChange={this.handleUserInput}
                  />
                  <div className="invalid-feedback">
                    Please provide a valid full name.
                  </div>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter email"
                    onChange={this.handleUserInput}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleUserInput}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    onChange={this.handleUserInput}
                  />
                  <div className="invalid-feedback">
                    Please confirm password
                  </div>
                </div>
                <div className="form-inline mt-4">
                  <a href="/" className="card-link col-6">
                    Login
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary col-5 offset-1"
                    onClick={this.registerUser}
                    disabled={this.disableRegisterButton()}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Overlay visibility={isOverlayVisible} />
        {this.redirectToProfile()}
      </div>
    );
  }
}
export default Registration;
