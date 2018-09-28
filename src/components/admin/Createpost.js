import React, { Component } from "react";
import { database } from "../../config";
import sluger from "../../sluger";

class Createpost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: "",
      author: "",
      slug: ""
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
      text: this.state.text,
      author: this.state.author,
      slug: sluger(this.state.title)
    };

    database.push(postData).then(
      this.setState({
        title: "",
        text: "",
        author: "",
        slug: ""
      })
    );
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
            placeholder="Post Author"
            name="author"
            value={this.state.author}
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
