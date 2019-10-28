import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Search from "./search";
import List from "./list";
// import CardDetails from './page/cardDetails';

class Student extends React.Component {
  state = {
    companies: [],
    jobs: [],
    selectedJob: null
  };

  //__________________________________Job API_________________

  handleSubmit = async wordFormSearchBar => {
    const response = await axios.get("http://api.indeed.com/ads/apisearch?", {
      params: {
        part: "results",
        limit: 10,
        q: wordFormSearchBar
      }
    });
    this.setState({
      jobs: response.data.items
    });
    console.log('jobs..............', this.state.jobs)
  };

  handleJobSelect = job => {
    this.setState({ selectedJob: job });
  };

  // __________________________________ filter __________________________________

  filterdata = (field, id) => {
    // console.log('field.....', this.state.companies)
    let filt = this.state.companies.map(com => {
      return com.post.filter(post => {
        return post.field === field.target.value;
      });
    });
    console.log("filt", filt);
    this.setState({ noor: filt });
    // console.log('post', this.state.post)
  };

  // t=temp1.map((com)=>{
  //   return com.post.filter((post)=>{
  //   return post.field==='IT'
  //   })
  //   })

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

  addCompany = (name, email, website, city, comp_description, field) => {
    axios
      .post(`http://localhost:9000/add`, {
        name,
        email,
        website,
        city,
        comp_description,
        field
      })
      .then(res => {
        this.setState({
          companies: res.data
        });
        //console.log('id' ,ID);
      })

      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  // __________________________________________________________

  render() {
    // console.log('this.state.companiesnnnnnnnnnnnn', this.state.companies)

    return (
      <div>
        <h1>Student page</h1>
        <Search
          filterdata={this.filterdata}
          handleFormSubmit={this.handleSubmit}
        />
        <List
          companies={this.state.companies}
          noor={this.state.noor}
          filterdata={this.filterdata}
          handleJobSelect={this.handleJobSelect}
          jobs={this.state.jobs}
        />

        {/* <CardDetails companies={this.state.companies} details={this.details}/> */}
      </div>
    );
  }
}

export default Student;
