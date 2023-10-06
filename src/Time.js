// src/App.js
import React from 'react';
import './App.css';
import DigitalClock from './DigitalClock';
import "./css/bootstrap.min.css";
import "./digitalclock.css";

function Time() {
  return (
    <div className= "digital-clock">
      <DigitalClock />
    </div>
  );
}

export default Time;
