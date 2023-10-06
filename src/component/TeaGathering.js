import React from "react";

function Cup({ guest }) {
    return (
        <h2>Tea cup for guest #{guest}</h2>
         );
  }
  
export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
        
      cups.push(<Cup key={i} guest={i} />);
    }
    return (
        <div>
          <h1>Pure Component</h1>
          <h3>Event handlres don't need to be pure</h3>
          {cups}
        </div>
      );
    
  }
  
