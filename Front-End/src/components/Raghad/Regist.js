import React, { Component } from "react";
import RegisterCompany from "./RegistrationCompany";
import RegisterTrainee from "./RegistrationTrainee";
import axios from "axios";
import CompanyLogo from "./company_building.png";
import TraineeImg from "./trainee.png";

export default class Regist extends Component {
  state = {
    comp: {},
    trainee: {}
  };

  addCompany = it => {
    console.log("it",it)
    axios.post("http://localhost:9000/addComp",
     { it }).then(array => {
      this.setState({ comp: array.data });
    });
  };

  addT = i => {
    axios.post("http://localhost:9000/addT", { i }).then(arr => {
      this.setState({ trainee: arr.data });
    });
  };

  render() {
    return (
      <div>
      <div className="container" style={{ marginTop: "120px", width: "100%", marginLeft: "" }}>
        <img
          src={CompanyLogo}
          style={{ height: "125px", marginLeft: "15%", marginBottom: "20px" }}
          alt="XD"
        />
        <img
          src={TraineeImg}
          style={{ height: "125px", marginLeft: "48.8%" }}
        />
        <div className="row" style={{width:"120%",marginLeft:"-10%"}}>
          <div
            className="col"
            style={{
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
              transition: "0.3s",
              width: " 100%",
              borderRadius: "8px"
            }}
          >
            <RegisterCompany addCompany={this.addCompany} />
          </div>

          <div
            className="col"
            style={{
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
              transition: "0.3s",
              width: " 100%",
              borderRadius: "8px",
              marginLeft: "20px"
            }}
          >
            <RegisterTrainee addT={this.addT} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
