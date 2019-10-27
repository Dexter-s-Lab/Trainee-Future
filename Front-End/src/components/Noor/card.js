import React, { Component } from 'react';
import Logo from './com.jpg';
import {Link} from 'react-router-dom'; 


export default class Card extends Component {
 
    render() {

      // console.log('this.props.company::::::', this.props.post)
      // console.log('this.props', this.props.company)
       const {post}= this.props;
       const {companies}= this.props;
      //  console.log('TTT',companies);
      //  console.log('PPPPP',post);

        return(
           <div>
 <div className="card mt-4">
  <h4 className="card-header text-center">{companies.name}</h4>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={Logo} className="card-img img-thumbnail float-left" alt="company logo"/>
    </div>
  <div className="card-body">
    <h5 className="card-title">Training Description</h5>
    <p className="card-text">{post.job_description}</p>
    <h5 className="card-title">The Field</h5>
    <p className="card-text">{post.field}</p>
    {/* <Link to= "/cardDetails"
    className="btn btn-primary float-right" 
    // onClick={this.props.details.bind(this,_id)} 
    >See Details</Link> */}

<Link to={{ pathname:`/cardDetails`, companies:companies}}
    className="btn btn-primary float-right" 
    // onClick={this.props.details.bind(this,_id)} 
    >See Details</Link>
  </div>
</div>
</div>
           </div>
        )
    }
  }


  // to={{ pathname: /blog/${post.id}, query: {title: post.title,content: post.content,comments: JSON.stringify(post.comments) }