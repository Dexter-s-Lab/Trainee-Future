import React, { Component } from 'react';
import OnePost from './onePost';

export default class Posts extends Component {
  render() {
        console.log('companies from post.....', this.props.company)
        // const {company}=this.props;
        let post = [...this.props.company.post]
        // console.log('Post:', post)
     return (
       <div>
         
         {/* <OnePost company={company} /> */}
         {
      post.map((item,key)=>{
        return <OnePost post={item}
        key={key}
        deleteItem ={this.props.deleteItem}
        />
      }
      )        

         }
         </div>

       
     )
            
    }
}
