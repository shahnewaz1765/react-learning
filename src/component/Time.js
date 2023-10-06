// src/App.js
import React from 'react';
import '../styles/App.css';
import DigitalClock from '../hook/DigitalClock';
import "../styles/bootstrap.min.css";
import "../styles/digitalclock.css";

function Time() {
  return (
    <div className= "digital-clock">
      <DigitalClock />
    </div>
  );
}

export default Time;
