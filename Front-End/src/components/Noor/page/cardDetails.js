import React, { Component } from "react";
import Logo from "../com.jpg";

export default class extends Component {
  render() {
    const { companies } = this.props.location;

    return (
      <div>
        <h1
          style={{
            marginTop: "100px",
            marginBottom: "100px",
            textAlign: "center"
          }}
        >
          Company Details
        </h1>
        <div>
          <div
            className="card mt-4"
            style={{
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              borderRadius: "15px",
              marginTop: "50px"
            }}
          >
            <h1
              className="card-header text-center"
              style={{
                margin: "0",
                backgroundColor: "#4c9c4c",
                height: "50px",
                color: "white",
                borderRadiusTopleft: "15px",
                borderRadiusTopRight: "15px"
              }}
            >
              {companies.name}
            </h1>
            <div className="row ">
              <div className="col-md-4">
                <img
                  src={companies.img_path}
                  className="card-img  float-left"
                  alt="company logo"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">Email</h2>
                <p className="card-text">{companies.email}</p>
                <hr />
                <h2 className="card-title">Website</h2>
                <p className="card-text">{companies.website}</p>
                <hr />
                <h2 className="card-title">City</h2>
                <p className="card-text">{companies.location}</p>
                <hr />
                <h2 className="card-title">Description</h2>
                <p className="card-text">{companies.comp_description}</p>
                <a
                  className="btn btn-primary float-right"
                  href="/student"
                  role="button"
                  style={{
                    position: "absolute",
                    width: "20%",
                    top: "400px",
                    right: "15px",
                    backgroundColor: "#4c9c4c"
                  }}
                >
                  Back to list
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
