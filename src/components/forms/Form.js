import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Rajesh",
      comments: "",
      topic: "vue",
    };
  }

  handlUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handlcommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handlTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  HandleSubmit = (event) => {
    alert(`${this.state.userName} - ${this.state.comments} - ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const {userName, comments, topic} = this.state
    return (
      <form onSubmit={this.HandleSubmit}>
        <div>
          <label>Usernane</label>
          <input
            type="text"
            value={userName}
            onChange={this.handlUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={comments}
            onChange={this.handlcommentsChange}
          >
            {" "}
          </textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handlTopicChange}>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
