import React, { Component } from "react";
import { database } from "../../config";
import sluger from "../../sluger";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    this.handleChange = this.handleChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(value){
    this.setState({ text: value })
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
          <br />
          <ReactQuill
            modules={Createpost.modules}
            parchment={Createpost.parchment}
            placeholder="Post Text"
            value={this.state.text}
            onChange={this.handleChange}
            style={{ backgroundColor: "#ffffff", color: '#000000' }}
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

Createpost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};

Createpost.parchment = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

export default Createpost;
