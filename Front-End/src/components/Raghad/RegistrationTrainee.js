import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RegisterTrainee extends Component {
  state = {};

  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTrainee = () => {
    this.props.addT(this.state);
    this.setState({
      fullName: "",
      email: "",
      gender: "",
      university: "",
      password: "",
      img_path: "",
      field: ""
    });
  };

  render() {
    const { change, addTrainee } = this;

    return (
      <div>
        <div>
          <div className="">
            <div>
              {" "}
              <h3 style={{ textAlign: "center" }}>Register as a Trainee</h3>
            </div>

            <label class="form-check-label">
              <h5 style={{ fontWeight: "bold" }}>Username</h5>
            </label>
            <input
              placeholder="Enter Your Name"
              name="fullName"
              type="text"
              className="form-control"
              onChange={change}
              required
            />

            <label class="form-check-label">
              <h5 style={{ fontWeight: "bold" }}>E-Mail</h5>
            </label>

            <input
              placeholder="Example@email.com"
              name="email"
              type="email"
              className="form-control validate"
              onChange={change}
            />
            <label class="form-check-label">
              <h5 style={{ fontWeight: "bold" }}>Password</h5>
            </label>

            <input
              placeholder="Enter Password"
              name="password"
              type="password"
              className="form-control"
              onChange={change}
            />
            <label class="form-check-label" style={{ marginTop: "5px" }}>
              <h5 style={{ fontWeight: "bold" }}>Gender</h5>
            </label>

            <select
              className=" form-control sm-control"
              name="gender"
              onChange={change}
              style={{ marginTop: "5px" }}
            >
              <option value="DEFAULT" disabled hidden selected>
                Gender
              </option>
              <option className="dropdown-item" value="M">
                Male
              </option>
              <option value="F">Female</option>
            </select>
            <label class="form-check-label" style={{ marginTop: "5px" }}>
              <h5 style={{ fontWeight: "bold" }}>University</h5>
            </label>

            <select
              className=" form-control sm-control"
              name="university"
              onChange={change}
              style={{ marginTop: "5px" }}
            >
              <option value="DEFAULT" disabled hidden selected>
                University
              </option>
              <option className="dropdown-item" value="University of Jordan">
                University of Jordan
              </option>
              <option value="Balqa Applied University">
                Balqa Applied University
              </option>
              <option value="Yarmouk University"> Yarmouk University</option>
            </select>

            <label class="form-check-label" style={{ marginTop: "5px" }}>
              <h5 style={{ fontWeight: "bold" }}>Your Field</h5>
            </label>

            <select
              className=" form-control sm-control"
              name="field"
              onChange={change}
              style={{ marginTop: "5px" }}
            >
              <option value="DEFAULT" disabled hidden>
                Field
              </option>
              <option className="dropdown-item" value="IT">
                IT
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Economy">Economy</option>
            </select>
            {/* <button
              className="btn btn-outline-success"
              onClick={addTrainee.bind(this)}
            >
              ADD
            </button> */}

            <Link
              to="/loginTrainee"
              className="btn btn-outline-success"
              style={{
                backgroundColor: "#10660e",
                color: "white",
                fontWeight: "bolder",
                marginLeft: "35%",
                marginTop: "25px",
                marginBottom: "25px"
              }}
              onClick={addTrainee.bind(this)}
            >
              Regist as Trainee
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
