import React, { Component } from "react";
import Logo from "./com.jpg";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    const { post } = this.props;
    const { companies } = this.props;

    return (
      <div
        style={{
          marginTop: "30px",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "15px"
        }}
      >
        <div className="card ">
          <h2
            className="card-header text-center"
            style={{
              margin: "30",
              backgroundColor: "#4c9c4c",
              height: "50px",
              color: "white"
            }}
          >
            {companies.name}
          </h2>
          <div className="row ">
            <div className="col-md-4">
              <img
                src={companies.img_path}
                className="card-img img-thumbnail float-left"
                alt="company logo"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">Training Description</h3>
              <p className="card-text">{post.job_description}</p>
              <hr />
              <h3 className="card-title">The Field</h3>
              <p className="card-text">{post.field}</p>

              <Link
                to={{ pathname: `/cardDetails`, companies: companies }}
                className="btn btn-success float-right"
                style={{
                  position: "absolute",
                  width: "20%",
                  top: "260px",
                  right: "15px",
                  backgroundColor: "#4c9c4c"
                }}
              >
                Info About Company
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// to={{ pathname: /blog/${post.id}, query: {title: post.title,content: post.content,comments: JSON.stringify(post.comments) }
