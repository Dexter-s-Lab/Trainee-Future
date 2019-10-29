import React from "react";
import Student from "./components/Noor/Noor";
import "bootstrap/dist/css/bootstrap.css";
import Regist from "./components/Raghad/Regist";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from "./components/Elias/header";
import Dashboard from "./components/Raghad/dashBoard";
import Login from "./components/Baraa/login";
import LoginTrainee from "./components/Baraa/loginTrainee";
import axios from "axios";
import CardDetails from "./components/Noor/page/cardDetails";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import Rest from "./components/Elias/rest.js";

class App extends React.Component {
  state = {
    company: {},
    trainee: {},
    isloged: false
  };

  deleteItem = _ID => {
    console.log("ID", _ID);

    axios
      .delete(
        `http://localhost:9000/deletePost/${this.state.company._id}/${_ID}`
      )
      .then(({ data }) => {
        console.log("D", data);
        this.setState({
          company: data
        });
        console.log("id", _ID);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // loginCompany = async company => {
  //   console.log("company from app :", company);
  //   await this.setState({ company: { ...company, isloged: true }},()=>{ console.log('MMMMMMMM',this.state.isloged)} );

  // };

  loginCompany = company => {
    this.setState({ company: company, isloged: true });
  };

  loginTrainee = trainee => {
    this.setState({ trainee: trainee, isloged: true });
  };

  Logout = () => {
    console.log("LOGOUT");
    this.setState({ isloged: false });
  };

  renderRedirect = redirect => {
    console.log("object");
    console.log("isLoged");
    console.log(redirect);
    if (redirect === true) {
      this.setState({
        isloged: true
      });
      return <Redirect to="/student/" />;
    }
  };

  check = async e => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/loginTrainee", {
        email: this.state.email,
        password: this.state.password
      })
      .then(({ data }) => {
        console.log("DATA LOGINTRAINEE TRAINEE", data);
        if (data.length > 0) {
          this.setState({
            massage: ""
          });

          this.renderRedirect(true);
        } else {
          this.setState({ massage: "wrong E-mail or password" });
        }
      });
  };

  render() {
    console.log("RENDER", this.state.isloged);
    return (
      <div>
        <Router>
          <div className="container-fluid">
            <Header
              LogoutUser={this.Logout}
              company={this.company}
              trainee={this.trainee}
              isloged={this.state.isloged}
            />
            <Route
              path="/login"
              component={() => (
                <Login
                  company={this.state.company}
                  loginCompany={this.loginCompany}
                />
              )}
            />
            <Route
              path="/loginTrainee"
              component={() => (
                <LoginTrainee
                  check={this.check}
                  renderRedirect={this.renderRedirect}
                  trainee={this.state.trainee}
                  loginTrainee={this.state.loginTrainee}
                  isloged={this.state.isloged}
                />
              )}
            />
            <Route path="/register"  component={Regist} />
            <Route path="/student" component={Student} />

            <Route
              path="/dashboard"
              component={() => (
                <Dashboard
                  company={this.state.company}
                  deleteItem={this.deleteItem}
                />
              )}
            />
            <Route path="/cardDetails" component={CardDetails} />
            <Route exact path="/" component={Rest} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
