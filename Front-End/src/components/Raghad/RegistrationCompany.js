import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class RegisterCompany extends Component {
  state = {  };

  change = event => {
    console.log("event.target.value :", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    
    });
  };

  addCompany = () => {
    this.props.addCompany(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
      website: "",
      city: "",
      location: "",
      comp_description: "",
      img_path: "",
      field: "",
      post: [
        {
          field: "",
          job_description: ""
        }
      ]
    });
  };

  render() {
    const { change, addCompany } = this;

    return (
      
      <div >
        <div >
        <div> <h3>Regist as Company</h3></div>
        <label class="form-check-label">Company Name</label>
          <input
            placeholder="Example"
            name="name"
            type="text"
            className="validate"
            className="form-control"
            onChange={change}
            
          /> 
          <div class="valid-feedback">
          Looks good!
        </div>
          
        <label class="form-check-label">Email</label>
          <input
            placeholder="Example@email.com"
            name="email"
            type="text"
            className="validate"
            className="form-control"
            
            onChange={change}
          />
           <label class="form-check-label">Password</label>
          <input
            placeholder="xxxxx"
            name="password"
            type="text"
            className="validate"
            className="form-control"

            onChange={change}
          />
           <label class="form-check-label">Website</label>
          <input
            placeholder="https://example.com"
            name="website"
            type="text"
            className="validate"
            className="form-control"

            onChange={change}
          />
          <label class="form-check-label">Location</label>
          <select
            className=" form-control sm-control"
            name="location"
            onChange={change}
          >
            <option value="DEFAULT" disabled hidden selected>
              Location
            </option>
            <option value="Amman">Amman</option>
            <option value="alsalt">Alsalt</option>
            <option value="Irbid">Irbid</option>
          </select>

<label class="form-check-label">Describtion</label>
          <textarea
            placeholder="About the company"
            name="comp_description"
            type="textarea"
            className="validate"
            className="form-control"

            onChange={change}
          />



        
          <input
            placeholder="img_path"
            name="img_path"
            type="file"
            className="validate"
            onChange={change}
          />
          {/* <button
            className="btn btn-outline-success"
            onClick={addCompany.bind(this)}
          >
            ADD
          </button> */}

          <Link
            to="/login"
            className="btn btn-outline-success"
            onClick={addCompany.bind(this)}
          >
            Regist as Company
          </Link>

          {/* <div>{this.state.email}</div> */}
        </div>
      </div>
   
  );
  }
}
