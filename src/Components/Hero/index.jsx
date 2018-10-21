import React from "react";
import Avatar from "@Components/Avatar";

const Hero = ({ fullUserInfo }) => (
  <div className="jumbotron jumbotron-fluid navbar-dark bg-primary">
    <div className="container text-center">
      <Avatar src={fullUserInfo.avatar} />
      <h1 className="display-4 text-white">
        {fullUserInfo.first_name} {fullUserInfo.last_name}
      </h1>
      <p className="lead text-white">
        Average GPA <strong>3.5</strong>
      </p>
    </div>
  </div>
);

export default Hero;
