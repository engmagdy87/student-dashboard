import React, { Component } from "react";
import { Redirect } from "react-router";
import Overlay from "@Components/OverlayComponent";
import { loginUser, getUser } from "@BusinessLayer/Login/LoginManager";
import validateEmail from "@Helpers/emailValidation";

import "./index.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      validateUserInfo: {
        email: null,
        password: null
      },
      userInfo: {
        email: "",
        password: ""
      },
      fullUserInfo: null,
      isOverlayVisible: false,
      isUserLoginSuccessfully: false
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

  loginUser = () => {
    const { userInfo } = this.state;

    this.setState({ isOverlayVisible: true });
    loginUser(userInfo)
      .then(() => this.getUser())
      .catch(err => console.log(err));
  };

  getUser = () => {
    getUser(1).then(response =>
      this.setState({
        isUserLoginSuccessfully: true,
        fullUserInfo: response.data
      })
    );
  };

  redirectToProfile = () => {
    const { isUserLoginSuccessfully, fullUserInfo } = this.state;
    if (isUserLoginSuccessfully)
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

  disableLoginButton = () => {
    const { validateUserInfo } = this.state;
    return !(validateUserInfo.email && validateUserInfo.password);
  };

  render() {
    const { isOverlayVisible } = this.state;

    return (
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
            <div className="card card-background">
              <div className="card-body">
                <img
                  className="mx-auto d-block logo"
                  src="http://zwaar.net/media/new/images/logo_en_b.svg"
                  alt="logo"
                />
                <h5 className="card-title text-center m-4">Login to Zwaar</h5>
                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      aria-describedby="emailHelp"
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
                  <div className="form-inline mt-4">
                    <a href="../registration" className="card-link col-6">
                      Register
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary col-5 offset-1"
                      onClick={this.loginUser}
                      disabled={this.disableLoginButton()}
                    >
                      Login
                    </button>
                  </div>
                </form>
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
export default Login;
