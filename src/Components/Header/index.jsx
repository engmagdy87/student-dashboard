import React, { Component } from "react";
import { Redirect } from "react-router";
import { setActiveTab } from "@BusinessLayer/Header/HeaderManager";

class Header extends Component {
  constructor(props) {
    super(props);
    const { activeTab, fullUserInfo } = props;
    this.state = {
      activeTab,
      fullUserInfo,
      isNavItemClicked: false,
      location: null
    };
  }

  setRedirectFlag = location => {
    this.setState({ location, isNavItemClicked: true });
  };

  redirectToLocation = () => {
    const { isNavItemClicked, fullUserInfo, location } = this.state;
    if (isNavItemClicked)
      return (
        <Redirect
          to={{
            pathname: `/${location}`,
            state: {
              fullUserInfo: fullUserInfo
            }
          }}
        />
      );
  };

  render() {
    const { activeTab } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="nav-link" href="#">
          <img
            src="http://zwaar.net/media/new/images/logo_en.svg"
            width="100"
            height="30"
            alt="white-logo"
            className="mr-5"
            style={{ cursor: "pointer" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${setActiveTab(activeTab, "Home")}`}
              style={{ cursor: "pointer" }}
            >
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li
              className={`nav-item ${setActiveTab(activeTab, "Profile")}`}
              style={{ cursor: "pointer" }}
              onClick={() => this.setRedirectFlag("profile")}
            >
              <a className="nav-link">Profile</a>
            </li>
            <li
              className={`nav-item ${setActiveTab(activeTab, "Results")}`}
              style={{ cursor: "pointer" }}
              onClick={() => this.setRedirectFlag("results")}
            >
              <a className="nav-link">Results</a>
            </li>
          </ul>
          <span className="navbar-nav nav-item" style={{ cursor: "pointer" }}>
            <a className="nav-link" href="/">
              Logout
            </a>
          </span>
        </div>
        {this.redirectToLocation()}
      </nav>
    );
  }
}

export default Header;
