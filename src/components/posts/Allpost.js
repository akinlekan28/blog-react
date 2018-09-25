import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Allpost extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="single-item">
        <p><strong>Title: </strong> {post.title}</p>
        <p><strong>Author: </strong> {post.author}</p>
        <p><strong>Body: </strong> {post.body}</p>
        <p><Link to={`/single-post/${post.id}`}><button>Read More</button></Link></p>
      </div>
    );
  }
}

export default Allpost;
