import React, { Component } from "react";
import Header from "@Components/Header";
import Hero from "@Components/Hero";
import PieChart from "@Components/Charts/Pie";
import BarFigure from "@Components/Charts/Bar";

class Profile extends Component {
  constructor(props) {
    super(props);

    const { fullUserInfo } = props.location.state;
    this.state = { fullUserInfo };
  }

  componentDidMount() {
    document.title = "User Profile";
  }

  render() {
    const { fullUserInfo } = this.state;
    return (
      <div>
        <Header activeTab="Profile" fullUserInfo={fullUserInfo} />
        <Hero fullUserInfo={fullUserInfo} />
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-md-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Class Vote</h5>
                  <p className="card-text">
                    Yes or No vote about hold on next section on Friday
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go To Discussion
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 offset-md-1">
              <PieChart />
            </div>
          </div>
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-md-6">
              <BarFigure />
            </div>
            <div className="col-12 col-md-5 offset-md-1 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">What is Lorem Ipsum?</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
