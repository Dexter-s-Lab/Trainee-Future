import React, { Component } from "react";
import OnePost from "./onePost";

export default class Posts extends Component {
  render() {
    
    let post = [...this.props.company.post];
    console.log('this.props.company---------------------------------- :', this.props.company);
    return (
      <div>
        {post.map((item, key) => {
          return (
            <OnePost post={item} key={key} deleteItem={this.props.deleteItem} comp={this.props.company} />
          );
        })}
      </div>
    );
  }
}
