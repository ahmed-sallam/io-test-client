import React, { Component } from "react";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import "./ChatBox.css";

class ChatBox extends Component {
  render() {
    return (
      <div className="Chatbox">
        <Messages messages={this.props.messages} />
        <MessageForm userNewMessage={this.props.userNewMessage} />
      </div>
    );
  }
}

export default ChatBox;
