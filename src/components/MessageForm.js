import React, { Component } from "react";
import "./MessageForm.css";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ""
    };
  }
  handleChange = e => {
    this.setState({
      currentMessage: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.userNewMessage(this.state.currentMessage);
    this.setState({ currentMessage: "" });
  };
  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleSubmit}>
        <input
          className="MessageForm__input"
          type="text"
          placeholder="Write your  message...."
          value={this.state.currentMessage}
          onChange={this.handleChange}
        />
        <input className="MessageForm__send" type="submit" value="send" />
      </form>
    );
  }
}

export default MessageForm;
