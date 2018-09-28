import React, { Component } from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

class Allpost extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="single-item">
        <p>
          <strong>Title: </strong> {post.title}
        </p>
        <p>
          <strong>Author: </strong> {post.author}
        </p>
        <p>
          <strong>Body: </strong>
          <Truncate lines={2}>{post.text}</Truncate>
        </p>
        <p>
          <Link to={`/single-post/${post.slug}`}>
            <button className="btn">Read More</button>
          </Link>
        </p>
      </div>
    );
  }
}

export default Allpost;
