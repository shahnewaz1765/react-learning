import React, { useState } from "react";

export default function TargetValue(){

    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();

    function handleFirstName(e){
        console.log(e);
        setFirstName(e.target.value);
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function handleReset(){
        setFirstName('');
        setLastName('');
    }
    return(
        <form>
            <input placeholder="First Name" value={firstName} onChange={handleFirstName} />
            <input placeholder="Last Name" value={lastName} onChange={handleLastName}/>
            <h1>Hello!</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}