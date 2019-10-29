import React, { Component } from "react";
import { Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import axios from "axios";
import "./elias.css";

export default class login extends Component {
  state = {
    email: "",
    password: "",
    massage: ""
  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  renderRedirect = () => {
    console.log("Raghad");
    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }
  };

  check = async e => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(({ data }) => {
        if (data.length > 0) {
          this.setState({ massage: "" });
          this.props.loginCompany(data[0]);
          this.setState({ redirect: true });
        } else {
          this.setState({ massage: "wrong E-mail or password" });
        }
      });
  };

  render() {
    if (this.props.company.email) {
      return <Redirect to="/dashboard" />;
    } else {
      console.log("props said", this.props.company);

      return (
        <BrowserRouter>
          <h1  style={{ textAlign: "center", marginTop: "100px" }}>
          <span class="glyphicon glyphicon-lock"></span>
            Login Company
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

          <div  style={{  }}>
            <label htmlFor="name">
              <h3>Company Email</h3>
            </label>
            <input
              type="text"
              placeholder="Enter E-Mail"
              name="email"
              onChange={this.change}
              value={this.state.email}
              required
            />

            <label htmlFor="psw">
              <h3>Company Password</h3>
            </label>
            <input
              type="password"
              onChange={this.change}
              value={this.state.password}
              placeholder="Enter Password"
              name="password"
              required
            />

            <button
              onClick={this.check}
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
