import React, { Component } from "react";
import axios from "axios";
import AddPost from "./addPost";
import Posts from "./Posts";

export default class Dashboard extends Component {
  state = {

  };

  componentDidMount() {
    console.log("this.props.company from dashbord", this.props.company.post);
  }

  addPost = (job_description, field) => {
    let company_info = { ...this.props.company };

    company_info.post.push({ job_description, field });

    axios
      .put("http://localhost:9000/addPost", company_info)
      .then(({ data }) => {
        this.setState({ companies: data });
      });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "90px" }}>
          {" "}
          {this.props.company.name}{" "}
        </h1>

        <AddPost addPost={this.addPost} />
        <Posts
        // company_info={}
          company={this.props.company}
          deleteItem={this.props.deleteItem}
        />
      </div>
    );
  }
}
