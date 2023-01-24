import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.clickHandler = this.changeMessage.bind(this);
  }

  //   changeMessage() {
  //     this.setState({
  //       message: "Message changed",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "message changed",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Performance implications with below snippet */}
        {/* <button onClick={this.changeMessage.bind(this)}>Click fo message change</button> */}
         {/* Easiest approach */}
        {/* <button onClick={() => this.changeMessage()}>
          Click fo message change
        </button> */}
        
        <button onClick={this.clickHandler}>Click fo message change</button>
      </div>
    );
  }
}

export default EventBind;
