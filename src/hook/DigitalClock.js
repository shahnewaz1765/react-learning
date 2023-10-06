// src/DigitalClock.js
import React, { Component } from 'react';
import '../styles/bootstrap.min.css';
//
class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(), //
    };
    //console.log(this.state.time);
  }

  componentDidMount() {
    console.log("from did mount")
    // Update the clock every second
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("from will unmount")
    // Clear the interval when the component unmounts
    clearInterval(this.intervalID);
  }

  render() {
    console.log("render")
    return (
      <div >
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default DigitalClock;
