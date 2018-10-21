import React, { Component } from "react";
import Header from "@Components/Header";
import Hero from "@Components/Hero";

class ExamResults extends Component {
  constructor(props) {
    super(props);
    const { fullUserInfo } = props.location.state;
    this.state = { fullUserInfo };
  }

  componentDidMount() {
    document.title = "Exam Results";
  }

  render() {
    const { fullUserInfo } = this.state;
    return (
      <div>
        <Header activeTab="Results" fullUserInfo={fullUserInfo} />
        <Hero fullUserInfo={fullUserInfo} />
        <div className="container">
          <div className="row mt-4">
            <table className="table table-hover col-12 col-md-10 offset-md-1">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Course</th>
                  <th scope="col">GPA</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>CS</td>
                  <td>3.4</td>
                  <td>Pass</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>IT</td>
                  <td>3</td>
                  <td>Pass</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">3</th>
                  <td>Electronics</td>
                  <td>1.5</td>
                  <td>Fail</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Math</td>
                  <td>2.5</td>
                  <td>Pass</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default ExamResults;
