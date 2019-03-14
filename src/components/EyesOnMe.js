// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buttonHandlerFocus = e => {
    console.log("Good!");
  };

  buttonHandlerBlur = e => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onFocus={this.buttonHandlerFocus} onBlur={this.buttonHandlerBlur}>
        This is a button
      </button>
    );
  }
}
