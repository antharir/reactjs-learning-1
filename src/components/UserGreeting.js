import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    // Short Circuit Operator 
    return this.state.isLoggedIn && <div>Welcome Rajesh</div> 


    // Ternary operator
    // return (
    //     this.state.isLoggedIn ? 
    //     <div>Welcome Rajesh</div> : 
    //     <div>Welcome Guest</div>
    // )

    // Using element
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Rajesh</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;


    // Using if condition
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Rajesh</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    
  }
}

export default UserGreeting;
