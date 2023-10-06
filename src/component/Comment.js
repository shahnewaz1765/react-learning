import React from "react";
import sb from "../assests/sb.jpg";
import  MyComponent from "../utils/MyComponent";
import "../styles/bootstrap.min.css";

export function Comment(props) {
    return (
        <div className="Comment ">
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
            <div className="mt-5  d-flex justify-content-center ">
               <details  >
                  <summary><b>Do you know how many times Real Madrid has won Champions League</b></summary>
                  <p>Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. The club competes in La Liga, the top tier of Spanish football. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit since its inception.As of 2023, Real Madrid had won the UEFA Champions League (UCL) more than any other club, with a total of <b>14</b> titles. </p>
                </details>
            </div>
        </div>
    );
}

export default Comment;