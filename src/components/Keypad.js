// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  enterKeyword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.enterKeyword} />
    )
  }

}
