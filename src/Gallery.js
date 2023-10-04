import React, { useState } from "react";
import { sculptureList } from "./gallerydata";
import "./css/bootstrap.min.css";

export default function Gallery(){
    const [index,setIndex]=useState(0);
    const [showMore, setShowmore]=useState(false);
    const hasNext = index < sculptureList.length-1;

    function handleNextClick(){
        if (hasNext){
            setIndex(index+1);
        }else{
            setIndex(0);
        }
    }

    function handleMoreClick(){
        setShowmore(!showMore);
    }

    let sculpture=sculptureList[index];
    return(
        <div className="pt-5">
            <button onClick={handleNextClick} >Next</button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description} </p>}

        </div>
    );


}