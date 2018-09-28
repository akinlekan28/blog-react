import React, { Component } from "react";
import {database} from '../../config';

class Createpost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const postData = {
        title: this.state.title,
        text: this.state.text
    };

    database.push(postData)
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Post Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            className="form-control"
          />

          <input
            type="text"
            placeholder="Post Text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            className="form-control"
          />

          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Createpost;
