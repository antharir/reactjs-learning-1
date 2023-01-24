import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment() {
        // this.setState({
        //     count: this.state.count+1
        // }, () => {
        //     console.log(this.state.count);
        // });

        this.setState((prevState)=>({
            count: prevState.count+1
        }));
    }

    incrementTwo() {
        this.increment();
        this.increment();
    }
    
  render() {
    return (
      <div>
        count {this.state.count}
        <button onClick={() => this.incrementTwo()}>Increment</button>
      </div>
    )
  }
}

export default Counter
