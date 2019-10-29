import React, { Component } from "react";
import { Link, Route, BrowserRouter, Redirect } from "react-router-dom";

export default class LoginTrainee extends Component {
  state = {
    email: "",
    password: "",
    massage: ""
  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.props.isloged === true) {
      return <Redirect to="/student" />;
    } else {
      return (
        <BrowserRouter>
          <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          
          <span class="glyphicon glyphicon-education"></span>
            Login Trainee
          </h1>

          <div
            style={{
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.8)",
              width: "40%",
              borderRadius: "8px",
              padding: "50px",
              marginLeft: "30%",
              marginTop: "50px"
            }}
          >

          <div style={{}}>
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <input
              type="text"
              onChange={this.change}
              value={this.state.email}
              name="email"
              placeholder="E-Mail"
            />
            <label htmlFor="psw">
              <h3>Password</h3>
            </label>
            <input
              type="password"
              onChange={this.change}
              value={this.state.password}
              name="password"
              placeholder="Enter Password"
            />
            <button
              onClick={this.props.check}
              style={{
                backgroundColor: "#622556",
                color: "white",
                fontWeight: "bolder",
                marginTop: "50px",
                width: "12.6%",
                marginLeft: "40.5%",
                height:"50px",
                width:"20%"
              }}
              className="btn"
            >
              Login
            </button>
          </div>
          {this.state.massage}
          </div>
        </BrowserRouter>
      );
    }
  }
}
