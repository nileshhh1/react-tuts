import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    const{name,email,city}=this.props;
    return (
        <>
      <h1>UserList</h1>
      {/* <p>{this.props.name}</p>
      <p>{this.props.email}</p> */}

      {/* // destructing */}

      <p>{name}</p>
      <p>{email}</p>
      <p>{city}</p>
      </>
    )
  }
}
