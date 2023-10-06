import React from "react";
import sb from "./gallery/sb.jpg";
import  MyComponent from "./MyComponent";

export function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img src={sb} style={{width:'100%',height:'100%'}}/>
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {MyComponent(props.date)}
            </div>
        </div>
    );
}

export default Comment;