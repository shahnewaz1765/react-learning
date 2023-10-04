import React from "react";
import zarag from "./gallery/zarag.jpg"
import "./data.css"


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'lightgrey',
      color: 'black'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1 id = "doto">{person.name}'s Todos</h1>
        <div id="image1">
        <img 
          src={zarag}
          alt="Gregorio Y. Zara"
        />
        </div>
        <div className="list">
        <ul >
          <li >Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
      </div>
    );
  }
  