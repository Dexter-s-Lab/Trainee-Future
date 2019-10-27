import React, { Component } from "react";
import { Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import axios from "axios";

export default class LoginTrainee extends Component {
  state = {
    email: "",
    password: "",
    massage: "",
    // isLoged:false
  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

 

  check = async e => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/loginTrainee", {
        email: this.state.email,
        password: this.state.password
      })
      .then(({ data }) => {
        console.log('DATA LOGINTRAINEE TRAINEE',data);
        if (data.length > 0) {
          console.log("jouzaaaaaaaaaaaaa");
          this.setState({ massage: "", isLoged:true});
         

          this.renderRedirect(true);
       
        } else {
          // console.log('wrong juzaaaaaaaaaaaa');
          this.setState({ massage: "wrong E-mail or password" });
        }
      });
  };
  renderRedirect = (redirect) => {
    console.log("Raghadddddddddddddddddd");
    if (redirect === true) {
      console.log("Raghadddddddddddddddddd");
      this.setState({ massage: "Done" , isLoged:true });
      return <Redirect to="/student" />;
    }
  };



  render() {

    
    if (this.state.email && this.state.massage=='Done') {
      console.log("this.props.loginTrainee.email");
      return <Redirect to="/student/" />;
    } else {
      console.log("props said", this.props.loginTrainee);

    

      return (
        <BrowserRouter>
          <div>
            <input
              type="email"
              onChange={this.change}
              value={this.state.email}
              name="email"
              placeholder="login"
            />
            <input
              type="password"
              onChange={this.change}
              value={this.state.password}
              name="password"
              placeholder="password"
            />
            <button onClick={this.check} className="btn btn-outline-success">
              Submit Trainee
            </button>

            {/* <Link to= "/student"  className="btn btn-outline-success" >Submit</Link> */}
          </div>
          {this.state.massage}
        </BrowserRouter>
      );
    }
  }

}