import React, { Component } from "react";
import Allpost from './posts/Allpost';
import {database} from '../config';

class Index extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          posts: []
        }
      }

  getPosts(){
    database.on('value', snapshot => {
      this.setState({posts: snapshot.val()})
    })
  }

  componentDidMount(){
    this.getPosts();
  }

  render() {

    let postContents;
    const { posts } = this.state;

    if (Object.keys(posts).length !== 0) {
      postContents = Object.keys(posts).map((post, key) =>
        <Allpost key={key} post={posts[post]} />
       )
    } else {
      postContents = <h1>No posts</h1>;
    }

    return (
      <React.Fragment>
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Blog</span>
        </h1>
        <h2 className="sm-heading">Random stuffs going through my mind...</h2>
        <div className="blog-home">{postContents}</div>
      </React.Fragment>
    );
  }
}

export default Index;
