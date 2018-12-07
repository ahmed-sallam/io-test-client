import React, { Component } from "react";
import ChatBox from "./components/ChatBox";
import "./App.css";
import io from "socket.io-client";

const socket = io("https://io-test-server.glitch.me/");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "",
      messages: []
    };
  }
  componentWillMount() {
    // This is just for testing.
    fetch("/api/news")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  }
  componentDidMount() {
    socket.on("botReply", data => {
      const messages = this.state.messages;
      const clientId = data.clientId;
      delete data.clientId;
      messages.push(data);
      setTimeout(() => {
        this.setState({ messages, clientId });
      }, 700);
    });
  }
  userNewMessage = text => {
    const message = {
      sender: "user",
      dataType: "text",
      data: text
    };
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
    const clientId = this.state.clientId;
    socket.emit("userReply", { ...message, clientId });
  };
  render() {
    return (
      <div className="App">
        <ChatBox
          messages={this.state.messages}
          userNewMessage={this.userNewMessage}
        />
      </div>
    );
  }
}

export default App;
