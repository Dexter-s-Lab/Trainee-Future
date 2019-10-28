import React, { Component } from "react";
import {Link} from 'react-router-dom'; 

export default class RegisterTrainee extends Component {
  state = {

  };

  change = event => {
    console.log("event.target.value :", event.target.value);
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
      <div >
        <div>
          <div className="input-field col s6">
            <div> <h3>Regist as Trainee</h3></div>
           
              <label class="form-check-label">Full Name</label>
              <input
                placeholder="fullName"
                name="fullName"
                type="text"
                className="form-control"
                onChange={change}
                required
              />

              {/* <div className="valid-feedback">Looks good!</div> */}
              <label class="form-check-label">Email</label>

              <input
                placeholder="email"
                name="email"
                type="email"
                className="validate"
                className="form-control"
                onChange={change}
              />
              <label class="form-check-label">Password</label>

              <input
                placeholder="password"
                name="password"
                type="password"
                className="validate"
                className="form-control"
                onChange={change}
              />
              <label class="form-check-label">Gender</label>

              <select
                className=" form-control sm-control"
                name="gender"
                onChange={change}
              >
                <option value="DEFAULT" disabled hidden selected>
                  Gender
                </option>
                <option className="dropdown-item" value="M">
                  Male
                </option>
                <option value="F">Femail</option>
              </select>
              <label class="form-check-label">You University</label>

              <select
                className=" form-control sm-control"
                name="university"
                onChange={change}
              >
                <option value="DEFAULT" disabled hidden selected>
                  University
                </option>
                <option className="dropdown-item" value="University of Jordan">
                  University of Jordan
                </option>
                <option value="Balqa Applied University">Balqa Applied University</option>
                <option value="Yarmouk University"> Yarmouk University</option>
              </select>

              <label class="form-check-label">Your Field</label>

              <select
                className=" form-control sm-control"
                name="field"
                onChange={change}
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
                onClick={addTrainee.bind(this)}
              >
                Regist as Trainee
              </Link>
          

            {/* <div>{this.state.email}</div> */}
            {/* <div>{this.state.submitted}</div> */}
          </div>
        </div>
    </div>
    );
  }
}