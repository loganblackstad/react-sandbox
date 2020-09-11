import React, { Component } from 'react';

class ClassUser extends Component {
  render() {
    return (
      <div>

        <b>User Class Component</b>
        <p>Name: {this.props.title} {this.props.children} | Age: {this.props.age}</p>

      </div>
    )
  }
}

export default ClassUser;