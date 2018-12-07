import React, { Component } from "react";
import "./MessageRow.css";

class MessageRow extends Component {
  render() {
    const { sender, data, dataType } = this.props;
    const renderType = () => {
      if (dataType === "text") {
        return <p>{data}</p>;
      }
    };
    return (
      <div
        className={`MessageRow ${
          sender === "bot" ? "MessageRow__bot" : "MessageRow__user"
        }`}
      >
        {renderType()}
      </div>
    );
  }
}

export default MessageRow;
