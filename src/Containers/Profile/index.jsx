import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.title = "User Profile";
  }

  render() {
    return <div>Profile</div>;
  }
}
export default Profile;
