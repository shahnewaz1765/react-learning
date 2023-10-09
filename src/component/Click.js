
import React, {Component} from "react";
import "../styles/click.css";

class Click extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
    
  }

  // Define a method to handle the button click
  handleClick() {
    // Update the state to increment the counter
    this.setState({ counter: this.state.counter + 1 });
  }

 

  render() {
    return (
      <div className="text-center">
        <h1 id ="counter">Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick} className="mb-3">Increment</button>
      </div>
    );
  }
}

export default Click;


