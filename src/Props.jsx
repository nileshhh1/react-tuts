import React, { Component } from 'react'
import UserList from "./UserList"
import "./App.css"
export default class Props extends Component {
  constructor(){
    super();
    this.state={
      name:"Naam kya h bhai ???",
      email:"Mail kya h teri ??",
      city:"konsi city m rhta h ??"
    }
  }
  render() {
    return (
      <>
      <div className="App">
      <h1>Props in React...
      {/* <UserList name="Nileshhhh" email="nileshhh@gmail.com"/> */}
      <UserList name={this.state.name} email={this.state.email} city={this.state.city}/>
      <button onClick={()=> this.setState({name:"Nilesh singh rana",email:"nileshhh@gmail.com",city:"Uttarakhand"})}>Update</button>
      </h1>
      </div>
      </>
      
    )
  }
}
