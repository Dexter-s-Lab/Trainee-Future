import React, { Component } from 'react';
import Logo from '../com.jpg';



export default class   extends Component {
    
    render() {
      // console.log('this.props.params::::::', this.props.location.props)
       const {companies}= this.props.location;
    
      //  console.log(this.props.companies)

        return(
            <div>
                <h1>Company Details</h1>
                <div className="card mt-4">
  <h4 className="card-header text-center">{companies.name}</h4>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={Logo} className="card-img  float-left" alt="company logo"/>
    </div>
  <div className="card-body">
  <h5 className="card-title">Email</h5>
    <p className="card-text">{companies.email}</p>
    <h5 className="card-title">Website</h5>
    <p className="card-text">{companies.website}</p>
    <h5 className="card-title">City</h5>
    <p className="card-text">{companies.location}</p>
    <h5 className="card-title">Description</h5>
    <p className="card-text">{companies.comp_description}</p>
    <a className="btn btn-primary float-right" href="/student" role="button">Back to list</a>
   
   
</div>
</div>


           </div>
           </div>
        )
    }
  }
