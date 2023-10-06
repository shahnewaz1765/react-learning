import React from "react";
import "./css/bootstrap.min.css";

function Message(props) {
  return (
    <div id={props.name}>
      <h1>
        {props.message} {props.name}{" "}
      </h1>
    </div>
  );
}

export default Message;
