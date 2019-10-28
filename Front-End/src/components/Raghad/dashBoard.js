import React, { Component } from "react";
import axios from 'axios';
import AddPost from './addPost';
import Posts from './Posts'




export default class Dashboard extends Component {
  state = {
    
  };


componentDidMount() {
  console.log('this.props.company from dashbord', this.props.company.post)

  }


  addPost = (job_description,field) => {
    let company_info={...this.props.company}
    console.log('company_info-------- from dashbord', company_info)

    company_info.post.push({job_description,field})

console.log('company_info', company_info)

    axios.put('http://localhost:9000/addPost', company_info )
    .then(({data}) => {
            // console.log('StaaaaaaaaateNooooooor:', this.state)
console.log('company_info', data)

      this.setState({ companies: data });
      console.log('NOOOOOOOOR');
   
     });
     console.log('Stateeeeeeeeee :', this.state.companies)
       
  }


  render() {
   
        // console.log('State111111111:', this.state.company)
    return (
        // console.log(state);
      <div className="container">
       <h1> {this.props.company.name} </h1>
          
          <AddPost  addPost={this.addPost}  />
          <Posts company={this.props.company}  deleteItem={this.props.deleteItem}/>
          
          
      </div>
    );
  }
}