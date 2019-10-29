import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Search from "./search";
import List from "./list";

class Student extends React.Component {
  state = {
    companies: []
  };

  // __________________________________ filter __________________________________

  filterdata = (field, id) => {
    let filt = this.state.companies.map(com => {
      return com.post.filter(post => {
        return post.field === field.target.value;
      });
    });
    console.log("filt", filt);
    this.setState({ noor: filt });
  };

  // ____________________________________________________________________

  details = id => {
    this.setState({
      companies: [...this.state.companies.filter(company => company.id === id)]
    });
  };

  // ___________________________ Read__________________

  componentDidMount() {
    axios.get("http://localhost:9000/data").then(({ data }) => {
      // console.log(data)
      this.setState({
        companies: data
      });
    });
  }

  // ___________________________ ADD company__________________

  addCompany = (
    name,
    email,
    website,
    city,
    comp_description,
    field,
    img_path
  ) => {
    axios
      .post(`http://localhost:9000/add`, {
        name,
        email,
        website,
        city,
        comp_description,
        field,
        img_path: ""
      })
      .then(res => {
        this.setState({
          companies: res.data
        });
      })

      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  // __________________________________________________________

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "110px" }}>
          Student page
        </h1>
        <Search filterdata={this.filterdata} />
        <List
          companies={this.state.companies}
          noor={this.state.noor}
          filterdata={this.filterdata}
        />
      </div>
    );
  }
}

export default Student;
