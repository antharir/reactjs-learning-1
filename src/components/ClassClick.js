import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("Class component click");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click - Class (Component)</button>
      </div>
    );
  }
}

export default ClassClick;
