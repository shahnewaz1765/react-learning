import React from "react";


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
