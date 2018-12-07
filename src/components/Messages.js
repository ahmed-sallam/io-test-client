import React, { Component } from "react";
import MessageRow from "./MessageRow";
import "./Messages.css";

class Messages extends Component {
  renderMessages = () =>
    this.props.messages.map((row, i) => {
      return (
        <div className="Messages__row" key={i}>
          <MessageRow
            sender={row.sender}
            dataType={row.dataType}
            data={row.data}
          />
        </div>
      );
    });

  render() {
    return (
      <div className="Messages">
        {this.renderMessages()}
        {/* <div className="Messages__row">
          <MessageRow sender="bot" dataType="text" data="Hello!" />
        </div>
        <div className="Messages__row">
          <MessageRow sender="bot" dataType="text" data="How are you?" />
        </div>
        <div className="Messages__row">
          <MessageRow sender="user" dataType="text" data="Fine, Thank you." />
        </div>
        <div className="Messages__row">
          <MessageRow sender="bot" dataType="text" data="This is simple!" />
        </div> */}
      </div>
    );
  }
}

export default Messages;
