import React, { Component } from 'react'

class Singlepost extends Component {
  
  componentDidMount(){
    const id = this.props.match.params.id;
    console.log(id)
  }


  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Singlepost;
