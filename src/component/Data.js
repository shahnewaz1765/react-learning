import React from "react";

import cr from "../assests/cr.jpg";
import zidane from "../assests/zidane.jpg";
import stefano from "../assests/stefano.jpg";
import "../styles/data.css";


const person = [
    {name: 'Alfred Di Stefano',
    theme: {
      backgroundColor: 'lightyellow',
      color: 'black'
    }},
    {name: 'Zinedine Zidane',
    theme: {
      backgroundColor: 'lightyellow',
      color: 'black'
    }},
    {name: "Cristiano Ronaldo",
    theme: {
      backgroundColor: 'lightyellow',
      color: 'black'
    }}
];
  
  export default function TodoList() {
    return (
      <div style={person[0].theme}>
        <h3 id = "doto">{person[0].name}'s Todos</h3>
        <div id="image1">
        <img 
          src={stefano}
          
        />
        </div>
        <div className="list">
        <ul >
          <li >Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>

        <h3 id = "doto">{person[1].name}'s Todos</h3>
        <div id="image2">
        <img 
          src={zidane}
        />
        </div>
        <div className="list">
        <ul >
          <li >Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>


        <h3 id = "doto">{person[2].name}'s Todos</h3>
        <div id="image3">
        <img 
          src={cr}
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
  