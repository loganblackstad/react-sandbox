import React, { Component } from 'react';

class ClassUser extends Component {
  state = {
    users: [
      { name: "John", age: 20 },
      { name: "Jill", age: 30 },
      { name: "Peter", age: 40 },
    ],
    title: "Users List"
  }


  // setState is Asyncronous
  makeYounger = () => {
    console.log('clicked');
    this.setState({
      users: [
        { name: "John", age: 19 },
        { name: "Jill", age: 29 },
        { name: "Peter", age: 39 },
      ]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.makeYounger}>Make Us Younger</button>
        <br />
        <h1>{this.state.title}</h1>
        <b>User Class Component</b>
        <p>Name: {this.props.title} {this.props.children} | Age: {this.props.age}</p>
        <p>Name: {this.state.users[0].name} | Age: {this.state.users[0].age}</p>
      </div>
    )
  }
}

export default ClassUser;