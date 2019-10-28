import React, { Component } from "react";
import Logo from '../Noor/com.jpg';

export default class OnePost extends Component {
  render() {
    return (
      <div>
      <div className="card mt-4">
       
       <div className="row no-gutters">
         <div className="col-md-4">
           <img src={Logo} className="card-img img-thumbnail float-left" alt="company logo"/>
         </div>
       <div className="card-body">
         <h5 className="card-title">Description</h5>
         <p className="card-text">{this.props.post.job_description}</p>
         <h5 className="card-title">The Field</h5>
         <p className="card-text">{this.props.post.field}</p>
         <button className="btn btn-danger float-right" onClick={this.props.deleteItem.bind(this,this.props.post._id)} >Delete</button>
       </div>
     </div>
     </div>
                </div>

    );
  }
}
