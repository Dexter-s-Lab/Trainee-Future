import React, { Component } from "react";
import Logo from "../Noor/com.jpg";

export default class OnePost extends Component {
  render() {
    return (
      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.3)",
          borderRadius: "15px",
          marginTop: "50px"
        }}
      >
        <div className="card mt-4">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={this.props.comp.img_path}
                className="card-img img-thumbnail float-left"
                alt="company logo"
                style={{ float: "left" }}
              />
              
            </div>
            <div className="card-body">
              <div style={{ width: "50%" }}>
                <h3 className="card-title" style={{ fontWeight: "bold" }}>
                  Description
                </h3>
                <p className="card-text">{this.props.post.job_description}</p>
                <hr />
                <h3 className="card-title" style={{ fontWeight: "bold" }}>
                  The Field
                </h3>
                <p className="card-text">{this.props.post.field}</p>
              </div>
              <button
                className="btn btn-danger float-right "
                onClick={this.props.deleteItem.bind(this, this.props.post._id)}
                style={{
                  position: "absolute",
                  width: "20%",
                  top: "230px",
                  right: "15px"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
