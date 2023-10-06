import React, { useState } from "react";
import "./textform.css";

import "./css/bootstrap.min.css";



export default function TextForm(props){

    const handleUpclick = () =>{
       
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
      
        setText(event.target.value);
    }
    
    const clearText = () =>{
        setText("");
    }


    const[text,setText]=useState();

    return(
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <label  className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                <div className="btn-block">
                   <button className="btn btn-primary btn-margin" onClick={handleUpclick}>Do It</button>
                   <button className="btn btn-primary " onClick={clearText}>Refresh</button>
                </div>
                
            </div>
        </div>
     
    )
}

