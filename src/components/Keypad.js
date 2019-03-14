import React, { Component } from "react";

export default class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyHandler = () => {
    console.log("Entering password...");
  };

  render() {
    return <input onKeyUp={this.keyHandler} type="password" />;
  }
}
